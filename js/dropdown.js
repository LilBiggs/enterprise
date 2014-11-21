/**
* Drop Down Control
*/

(function (factory) {
  if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module depending on jQuery.
      define(['jquery'], factory);
  } else {
      // No AMD. Register plugin with global jQuery object.
      factory(jQuery);
  }
}(function ($) {

  $.fn.dropdown = function(options, args) {

    // Dropdown Settings and Options
    var pluginName = 'dropdown',
        defaults = {
          editable: 'false',
          source: null,  //A function that can do an ajax call.
          empty: false //Initialize Empty Value
        },
        settings = $.extend({}, defaults, options);

    // Plugin Constructor
    function Plugin(element) {
      this.element = $(element);
      this.init();
    }

    // Actual DropDown Code
    Plugin.prototype = {
      init: function() {

        var id = this.element.attr('id')+'-shdo'; //The Shadow Input Element. We use the dropdown to serialize.
        this.isHidden = this.element.css('display') === 'none';
        this.element.hide();
        this.orgLabel = $('label[for="' + this.element.attr('id') + '"]');

        this.label = $('<label class="label"></label>').attr('for', id).html(this.orgLabel.html());
        this.input = $('<input type="text" readonly class="dropdown" tabindex="0"/>').attr({'role': 'combobox'})
                        .attr({'aria-autocomplete': 'none', 'aria-owns': 'dropdown-list'})
                        .attr({'aria-readonly': 'true', 'aria-activedescendant': 'dropdown-opt16'})
                        .attr('id', id);

        var icon = $('<svg class="icon"><use xlink:href="#icon-dropdown"/></svg>');

        if (this.orgLabel.length === 1 && this.orgLabel.closest('table').length ===1) {
          this.element.after(this.input, this.trigger);
          this.orgLabel.after(this.label);
        } else if (this.orgLabel.length === 1) {
          this.element.after(this.label, this.input, this.trigger, icon);
        } else {
          this.element.after(this.input, this.trigger, icon);
        }

        this.updateList();
        this.setValue();
        this.setInitial();
        this.setWidth();
        this.orgLabel.hide();
        this.handleEvents();
      },

      // Set Field Width
      setWidth: function() {
        var style = this.element[0].style,
          labelStyle = (this.orgLabel[0] === undefined ? null : this.orgLabel[0].style);

        if (style.width) {
          this.input.width(style.width);
        }
        if (style.position === 'absolute') {
          this.input.css({position: 'absolute', left: style.left, top: style.top, bottom: style.bottom, right: style.right});
        }
        if (labelStyle && labelStyle.position === 'absolute') {
          this.label.css({position: 'absolute', left: labelStyle.left, top: labelStyle.top, bottom: labelStyle.bottom, right: labelStyle.right});
        }
      },

      // Update List Values
      updateList: function() {
        var self = this;
        //Keep a list generated and append it when we need to.
        self.list = $('<div class="dropdown-list" id="dropdown-list">');
        self.listUl =$('<ul tabindex="-1" aria-expanded="true"></ul>').appendTo(self.list);
        self.list.prepend('<svg class="icon"><use xlink:href="#icon-dropdown"></svg>');

        self.element.find('option').each(function(i) {
          var option = $(this),
              listOption = $('<li id="list-option'+ i +'" role="option" class="dropdown-option" role="listitem" tabindex="-1">'+ option.html() + '</li>');

          self.listUl.append(listOption);
          if (option.is(':selected')) {
            listOption.addClass('selected');
          }

          //Image Support
          if (option.attr('class')) {
            listOption.addClass(option.attr('class'));
          }
          //Special Data Attribute
          if (option.attr('data-attr')) {
            listOption.attr('data-attr', option.attr('data-attr'));
          }
          //Tooltip Support
          if (option.attr('title') && $.fn.tooltip) {
            listOption.attr('title', option.attr('title')).tooltip();
          }
        });

        //Add Input Element and
        this.searchInput = $('<input type="text" class="dropdown-search" id="dropdown-search">');
        this.list.prepend(this.searchInput);
        this.searchInput.before('<label for="dropdown-search" class="audible">Search</label>');
      },

      // Set the value based on selected options
      setValue: function () {
        var text = this.element.find('option:selected').text();

        if (settings.empty && this.element.find('option[selected]').length === 0) {
          //initially empty
          return;
        }

        //Set initial values for the edit box
        this.input.val(text);
        if (this.element.attr('maxlength')) {
           this.input.val(text.substr(0, this.element.attr('maxlength')));
        }
      },

      // Copy initial stuff from the drop down.
      setInitial: function() {

       if (this.element.hasClass('backgroundColor')) {
        this.input.addClass('backgroundColor');
       }
       if (this.orgLabel.hasClass('noColon')) {
        this.label.addClass('noColon');
       }
       if (this.orgLabel.hasClass('sr-only')) {
        this.label.addClass('sr-only');
       }
       if (this.orgLabel.attr('style')) {
        this.label.attr('style', this.orgLabel.attr('style'));
       }
       if (this.element.is(':disabled')) {
        this.input.attr('disabled','');
       }
       if (this.element.is('[readonly]')) {
        this.input.addClass('is-readonly');
       }
       if (this.isHidden) {
        this.input.hide().prev('label').hide();
        this.input.next('svg').hide();
       }

       //TODO: Empty Selection
       if (this.element.attr('placeholder')) {
        this.input.attr('placeholder', this.element.attr('placeholder'));
        this.element.removeAttr('placeholder');
       }
      },

      //Bind mouse and key events
      handleEvents: function() {
        var self = this;

        this.input.on('keydown.dropdown', function(e) {
          self.handleKeyDown($(this), e);
        }).on('keypress.dropdown', function(e) {
          self.ignoreKeys($(this), e);
        }).on('mouseup.dropdown', function(e) {
          if (e.button === 2) {
            return;
          }
          self.toggleList();
        });

        self.element.on('activate', function () {
          self.activate();
        }).on('updated', function () {
          self.closeList();
          self.updateList();
          self.setValue();
        });

        //for form resets.
        self.element.closest('form').on('reset.dropdown', function() {
          setTimeout(function () {
            self.element.trigger('updated');
          }, 1);
        });
      },

      ignoreKeys: function (input, e) {
        var charCode = e.which;

        //Needed for browsers that use keypress events to manipulate the window.
        if (e.altKey && (charCode === 38 || charCode === 40)) {
          e.stopPropagation();
          return false;
        }

        // Prevent Backspace from returning to the previous page.
        if (charCode === 8 && input.hasClass('.dropdown')) {
          e.stopPropagation();
          e.preventDefault();
          return false;
        }

        if (input.is(':disabled') || input.hasClass('is-readonly')) {
          return;
        }
      },

      //handle events while search is focus'd
      handleSearchEvents: function () {
        var self = this,
          timer, term = '';

        this.searchInput.on('keydown.dropdown', function(e) {
          self.handleKeyDown($(this), e);
        }).on('keypress.dropdown', function(e) {
          var searchInput = $(this),
            selected = false;

          self.ignoreKeys(searchInput, e);

          //Open List and Filter results
          if (self.searchInput.val() === self.element.find('option:selected').text()) {
            self.searchInput.val('');
          }

          clearTimeout(timer);
          timer = setTimeout(function () {
           term = searchInput.val().toLowerCase();
            self.listUl.find('li').hide();

            $.each(self.element[0].options, function (index) {
              //Filter List
              var opt = $(this),
                listOpt = self.listUl.find('#list-option'+ index);

              //Find List Item - Starts With
              if (opt.text().toLowerCase().indexOf(term) > -1) {
                if (!selected) {
                  self.selectOption(opt);
                  selected = true;
                  self.searchInput.val(term);
                }

                //Highlight Term
                var exp = new RegExp('(' + term + ')', 'gi'),
                text = listOpt.text().replace(exp, '<b>$1</b>');
                listOpt.show().html(text);
              }
            });

            term = '';

            //Adjust height / top position
            if (self.list.hasClass('is-ontop')) {
              self.list.css({'top': self.input.offset().top - self.list.height() + self.input.outerHeight() - 2});
            }
          }, 100);

        });

      },

      handleKeyDown: function(input, e) {
        var selectedIndex = this.element[0].selectedIndex,
            options = this.element[0].options,
            self = this;

        self.ignoreKeys(input, e);

        //Down and Up arrow to open
        if (!self.isOpen() && (e.keyCode === 38 || e.keyCode === 40)) {
          self.toggleList();
        }

        if (self.isOpen()) {
          options = this.listUl.find('li:visible');
          selectedIndex = -1;
          $(options).each(function(index) {
            if ($(this).is('.selected')) {
              selectedIndex = index;
            }
          });
        }

        switch (e.keyCode) {
          case 46: { //del
            e.stopPropagation();
            return false;
          }
          case 9: {  //tab - save the current selection

            this.selectOption($(options[selectedIndex]));
            this.activate();
            if (self.isOpen()) {  // Close the option list
              self.closeList(false);
            }

            // allow tab to propagate
            return true;
          }
          case 27: { //Esc - Close the Combo and Do not change value
            if (self.isOpen()) {
              // Close the option list
              self.closeList(true);
              self.input.focus();
            }

            e.stopPropagation();
            return false;
          }
          case 13: {  //enter

            if (self.isOpen()) {
              e.preventDefault();
              self.selectOption($(options[selectedIndex])); // store the current selection
              self.closeList(false);  // Close the option list
              self.activate();
            }

            e.stopPropagation();
            return false;
          }
          case 38: {  //up

            if (selectedIndex > 0) {
              this.selectOption($(options[selectedIndex - 1]));
            }

            e.stopPropagation();
            e.preventDefault();
            return false;
          }
          case 40: {  //down
            if (selectedIndex < options.length - 1) {
              var next = $(options[selectedIndex + 1]);
              this.selectOption(next);
            }

            e.stopPropagation();
            e.preventDefault();
            return false;
          }
          case 35: { //end
            var last = $(options[options.length - 1]);
            this.selectOption(last);

            e.stopPropagation();
            return false;
          }
          case 36: {  //home
            var first = $(options[0]);
            this.selectOption(first);

            e.stopPropagation();
            return false;
          }
        }

        if (!self.isOpen() && self.isPrintable(e.keyCode)) {
          self.toggleList();
          self.searchInput.val('');
        }
        return true;
      },

      isPrintable: function(keycode) {
        var valid =
          (keycode > 47 && keycode < 58)   || // number keys
          (keycode > 64 && keycode < 91)   || // letter keys
          (keycode > 95 && keycode < 112)  || // numpad keys
          (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
          (keycode > 218 && keycode < 223);   // [\]' (in order)

          return valid;
      },

      // Focus the Element
      activate: function () {
        this.input.focus();
        if (this.input[0].setSelectionRange) {
          this.input[0].setSelectionRange(0, 0);  //scroll to left
        }
      },

      // Prep for opening list,make ajax call ect...
      open: function() {
        var self = this;

        if (this.element.is(':disabled') || this.input.hasClass('is-readonly')) {
          return;
        }

        if (!self.callSource(function () {
          self.updateList();
          self.openList();
        })) {
          self.updateList();
          this.openList();
        }
      },

      // Actually Show The List
      openList: function () {
        var current = this.list.find('.selected'),
            self =  this;

        $('#dropdown-list').remove(); //remove old ones
        this.list.appendTo('body').show().attr('aria-expanded', 'true');
        this.position();
        this.scrollToOption(current);
        this.searchInput.val(this.element.find('option:selected').text()).focus();
        this.handleSearchEvents();

        self.list.on('click.list', 'li', function () {
          var idx = $(this).index(),
              cur = $(self.element[0].options[idx]);

          //Select the clicked item
          self.selectOption(cur);
          self.activate();
          self.closeList();
        });

        $(document).on('click.dropdown', function(e) {
          var target = $(e.target);
          if (target.is('.dropdown-option') || target.is('.dropdown')) {
            return;
          }
          self.closeList();
        }).on('scroll.dropdown', function() {
          self.closeList();
        });

        $(window).on('resize.dropdown', function() {
          self.closeList();
        });
      },

      // Set size and positioning of the list
      position: function() {
        var isFixed = false, isAbs = false,
          top = (this.input.offset().top);// + $(window).scrollTop());

        this.list.css({'top': top, 'left': this.input.offset().left - $(window).scrollLeft()});

        //Fixed and Absolute Positioning use cases
        this.input.parentsUntil('body').each(function () {
          if ($(this).css('position') === 'fixed') {
            isFixed = true;
            return;
          }
        });

        if (isFixed) {
          this.list.css('position', 'fixed');
        }

        if (this.input.parent('.field').css('position') === 'absolute') {
          isAbs = true;
          this.list.css({'top': this.input.parent('.field').offset().top + this.input.prev('label').height() , 'left': this.input.parent('.field').offset().left});
        }

        //Flow up if not enough room on bottom
        this.list.removeClass('is-ontop');
        if (top - $(window).scrollTop() + this.list.outerHeight() > $(window).height()) {
          this.list.css({'top': top - this.list.outerHeight() + this.input.outerHeight()});
          this.list.addClass('is-ontop');
          this.listUl.prependTo(this.list);
        }

        // If the menu is off the top of the screen, cut down the size of the menu to make it fit.
        if (this.list.offset().top < 0 ) {
          var listHeight = this.list.outerHeight(),
            diff = this.list.offset().top * -1;
          this.list.css('top', 0);
          this.list.height(listHeight - diff);
        }

        //let grow or to field size.
        if (this.list.width() > this.input.outerWidth()) {
           this.list.css('width', '');
           this.list.css({'width': this.list.outerWidth() + 35});
           //But not off the left side
           var maxWidth = $(window).width() - parseInt(this.list.css('left'), 10);
           if (this.list.width() > maxWidth) {
            this.list.width(maxWidth - 20);
           }
        } else {
           this.list.width(this.input.outerWidth()-2);
        }
      },

      //Close list and detch events
      closeList: function() {
        this.list.hide().attr('aria-expanded', 'false').remove();
        this.list.off('click.list').off('mousewheel.list');
        this.listUl.find('li').show();
        this.input.removeClass('is-open');
        $(document).off('click.dropdown scroll.dropdown');
        $(window).off('resize.dropdown');
      },

      //Set option into view
      scrollToOption: function(current) {
        var self = this;
        if (!current) {
          return;
        }
        if (current.length === 0) {
          return;
        }
        // scroll to the currently selected option
        self.listUl.scrollTop(0);
        self.listUl.scrollTop(current.offset().top - self.listUl.offset().top - self.listUl.scrollTop() - 40);
      },

      //Blur and Close List
      handleBlur: function() {
        var self = this;

        if (this.isOpen()) {
          this.timer = setTimeout(function() {
            self.closeList();
          }, 40);
        }

        return true;
      },

      // Return true/false if the list is open
      isOpen: function() {
        return this.list.is(':visible');
      },

      // Hide or Show list
      toggleList: function() {
        if (this.isOpen()) {
          this.closeList();
        } else {
          this.open();
        }
      },

      //Select an option and optionally trigger events
      selectOption: function(option, noTrigger) {
        if (!option) {
          return option;
        }

        if (option.is('li')) {
          option = this.element.find('option').eq(option.attr('id').replace('list-option',''));
        }

        var code = option.val(),
          oldVal = this.input.val(),
          text = option.text(),
          trimmed;

        if (option.index() === this.element[0].selectedIndex) {
          return;
        }

        if (this.isOpen()) {
          // remove the selected class from the current selection
          this.list.find('.selected').removeClass('selected');
          var listOption = this.list.find('#list-option'+option.index());
          listOption.addClass('selected');

          // Set activedescendent for new option
          this.input.attr('aria-activedescendant', listOption.attr('id'));
          this.searchInput.attr('aria-activedescendant', listOption.attr('id'));
          this.scrollToOption(listOption);
        }

        this.input.val(text); //set value and active descendent
        this.searchInput.val(text);

        if (this.element.attr('maxlength')) {
          trimmed = text.substr(0, this.element.attr('maxlength'));
          this.input.val(trimmed);
          this.searchInput.val(trimmed);
        }

        this.element.find('option').each(function () {
          if (this.value === code) {
            this.selected = true;
            return false;
          }
        });

        if (oldVal !== option.text() && !noTrigger) {
          this.element.val(code).trigger('change');
        }

      },

      // Execute the source ajax option
      callSource: function(callback) {
        var self = this;
        if (settings.source) {
          var response = function (data) {
            //to do - no results back do not open.
            var list = '',
              val = self.element.val();

            //populate
            self.element.empty();
            for (var i=0; i < data.length; i++) {
              list += '<option' + (data[i].id === undefined ? '' : ' id="' + data[i].id.replace('"', '\'') + '"')
                      + (data[i].value === undefined ? '' : ' value="' + data[i].value.replace('"', '\'') + '"')
                      + (data[i].value === val ? ' selected ' : '')
                      + '>'+ data[i].label + '</option>';
            }
            self.element.append(list);
            self.input.removeClass('is-busy');
            callback();
            return;
          };

          //TODO: show indicator when we have it
          self.input.addClass('is-busy');

          settings.source(self.input.val(), response);
          return true;
        }
        return false;
      },

      // External Facing function to set value by code - Depricated set on select and trigger updated
      setCode: function(code) {
        var self = this,
          doSetting = function ()  {
            var option = null;

            self.element.find('option').each(function () {
              if (this.value === code) {
                option = $(this);
              }
            });

            self.selectOption(option, true);
          };

        if (!self.callSource(doSetting)) {
          doSetting();
        }
      },

      destroy: function() {
        $.removeData(this.element[0], pluginName);
        this.closeList();
        this.input.prev('label').remove();
        this.input.off().remove();
        this.element.show().prev('label').show();
      },

      disable: function() {
        this.element.attr('disabled', 'disabled');
        this.input.attr('disabled', 'disabled');
      },

      enable: function() {
        this.element.removeAttr('disabled');
        this.input.removeAttr('disabled');
      }

    };

    // Keep the Chaining and Init the Controls or Settings
    return this.each(function() {
      var instance = $.data(this, pluginName);
      if (instance) {
        if (typeof instance[options] === 'function') {
          instance[options](args);
        }
        instance.settings = $.extend({}, defaults, options);
      } else {
        instance = $.data(this, pluginName, new Plugin(this, settings));
      }
    });
  };
}));
