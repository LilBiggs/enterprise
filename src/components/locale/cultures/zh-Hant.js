// Get Latest from http://www.unicode.org/Public/cldr/25/
Soho.Locale.addCulture('zh-Hant', {
  // layout/language
  language: 'zh',
  englishName: 'Chinese (Traditional, Taiwan)',
  nativeName: '中文(台灣)',
  // layout/orientation/@characters
  direction: 'left-to-right',
  // ca-gregorian
  calendars: [{
    name: 'gregorian',
    // ca-gregorian/main/dates/calendars/gregorian/dateFormats/
    dateFormat: {
      separator: '/', // Infered
      timeSeparator: ':',
      short: 'yyyy/M/d', // use four digit year
      medium: 'y年M月d日',
      long: 'yyyy年M月d日',
      full: 'yyyy年M月d日 EEEE',
      month: 'M月d日',
      year: 'yyyy年M',
      timestamp: 'ah:mm:ss a',
      datetime: 'M/d/yyyy ah:mm',
      timezone: 'M/d/yyyy ah:mm zz',
      timezoneLong: 'M/d/yyyy ah:mm zzzz'
    }, // Infered short + short gregorian/dateTimeFormats
    // ca-gregorian/main/dates/calendars/gregorian/days/format/short or abbreviated (2 digit)
    days: {
      wide: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      abbreviated: ['週日', '週一', '週二', '週三', '週四', '週五', '週六'],
      narrow: ['日', '一', '二', '三', '四', '五', '六']
    },
    // ca-gregorian/main/dates/calendars/gregorian/months/format/wide
    months: {
      wide: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      abbreviated: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    },
    // ca-gregorian/main/dates/calendars/gregorian/timeFormats/short
    timeFormat: 'ah:mm',
    // ca-gregorian/main/dates/calendars/gregorian/dayPeriods/wide
    dayPeriods: ['上午', '下午']
  }],
  // numbers/currencyFormats-numberSystem-latn/standard
  currencySign: 'NT$',
  currencyFormat: '¤ ###',
  // numbers/symbols-numberSystem-latn
  numbers: {
    percentSign: '%',
    percentFormat: '###%',
    percentSuffix: '%',
    percentPrefix: '',
    minusSign: '-',
    decimal: '.',
    group: ',',
    groupSizes: [3, 3]
  },
  // Resx - Provided By Translation Team
  messages: {
    AboutText: { id: 'AboutText', value: '版權所有 &copy; {0} Infor。保留一切權利。本文所載之文字及設計標誌為 Infor 和/或其分支機構及子公司的商標和/或註冊商標。保留一切權利。本文列出的所有其他商標皆為各擁有者的財產。' },
    Actions: { id: 'Actions', value: '動作集', comment: 'Tooltip text for the action button with additional in context actions' },
    AdditionalItems: { id: 'AdditionalItems', value: '其他項目', comment: 'Button tooltip used in a list of movable items' },
    Add: { id: 'Add', value: '新增', comment: 'Add' },
    AddComments: { id: 'AddComments', value: '新增註解', comment: 'Add comments to a form of data' },
    AddNewTab: { id: 'AddNewTab', value: '新增索引標籤', comment: 'Attached to a button that adds new tabs' },
    AdministrativeLeave: { id: 'AdministrativeLeave', value: '行政休假', comment: 'As in vacation time from work' },
    AdvancedFilter: { id: 'AdvancedFilter', value: '建立進階篩選', comment: 'In a data grid active an advanced filtering feature' },
    Alert: { id: 'Alert', value: '警示', comment: 'Alert' },
    AlertOnPage: { id: 'AlertOnPage', value: '警示訊息，頁面', comment: 'Alert message(s) on page n' },
    All: { id: 'All', value: '全部', comment: 'All items in the context of a filter' },
    AllDay: { id: 'AllDay', value: '全天', comment: 'Label for an event which lasts all day' },
    AllResults: { id: 'AllResults', value: '全部結果 -', comment: 'Search Results Text' },
    AligntoBottom: { id: 'AligntoBottom', value: '靠下對齊', comment: 'Align to Bottom tooltip' },
    AlignCenterHorizontally: { id: 'AlignCenterHorizontally', value: '水平置中對齊', comment: 'Align Center Horizontally tooltip' },
    Amber: { id: 'Amber', value: '琥珀色', comment: 'Color in our color pallette' },
    Amethyst: { id: 'Amethyst', value: '紫水晶色', comment: 'Color in our color pallette' },
    Apply: { id: 'Apply', value: '套用', comment: 'Text in a button to apply an action' },
    AppMenuTriggerText: { id: 'AppMenuTriggerText', value: '功能表', comment: 'Text in a special Module Tab used to trigger an Application Menu open or closed' },
    Attach: { id: 'Attach', value: '附加', comment: 'Attach' },
    Available: { id: 'Available', value: '可用', comment: 'Button tooltip used in a list of movable items' },
    Azure: { id: 'Azure', value: '天藍色', comment: 'Color in our color pallette' },
    BackgroundColor: { id: 'BackgroundColor', value: '背景色彩', comment: 'add or edit text background color in the editor' },
    Between: { id: 'Between', value: '介於', comment: 'Between in icons for filtering' },
    Blockquote: { id: 'Blockquote', value: '區塊引述', comment: 'insert a block quote in the editor' },
    Bold: { id: 'Bold', value: '粗體', comment: 'Make text Bold' },
    Bookmarked: { id: 'Bookmarked', value: '已加入書籤', comment: 'Bookmark filled - Element is already bookmarked' },
    BookmarkThis: { id: 'BookmarkThis', value: '將此頁加入書籤', comment: 'Bookmark an element' },
    Breadcrumb: { id: 'Breadcrumb', value: '階層連結', comment: 'Text describing the Breadcrumb' },
    Browser: { id: 'Browser', value: '瀏覽器', comment: 'As in a Web Browser' },
    BulletedList: { id: 'BulletedList', value: '項目符號清單', comment: 'Bulleted List tooltip' },
    Calendar: { id: 'Calendar', value: '行事曆', comment: 'Inline Text for the title of the Calendar control' },
    Camera: { id: 'Camera', value: '相機', comment: 'Camera tooltip' },
    Cancel: { id: 'Cancel', value: '取消', comment: 'Cancel tooltip' },
    CapsLockOn: { id: 'CapsLockOn', value: '大寫鎖定已啟用', comment: 'Caps Lock On message' },
    Cart: { id: 'Cart', value: '購物車', comment: 'Cart tooltip' },
    CenterText: { id: 'CenterText', value: '置中', comment: 'An Icon Tooltip' },
    CharactersLeft: { id: 'CharactersLeft', value: '剩餘 {0} 個字元', comment: 'indicator showing how many more characters you can type.' },
    CharactersMax: { id: 'CharactersMax', value: '字元數上限為 ', comment: 'indicator showing how many max characters you can type.' },
    ChangeSelection: { id: 'ChangeSelection', value: '若要變更選取項目，請使用方向鍵。', comment: 'Audible Text for drop down list help' },
    ChangeView: { id: 'ChangeView', value: '變更檢視', comment: 'Change the current page from a list of options' },
    Checkbox: { id: 'Checkbox', value: '核取方塊', comment: 'Checkbox tooltip' },
    Checked: { id: 'Checked', value: '已核取', comment: 'Checked tooltip' },
    Clear: { id: 'Clear', value: '清除', comment: 'Tooltip for a Clear Action' },
    ClearFilter: { id: 'ClearFilter', value: '清除篩選', comment: 'Clear the current filter criteria' },
    ClearFormatting: { id: 'ClearFormatting', value: '清除篩選', comment: 'Clear the formatting in editor' },
    ClearSelection: { id: 'ClearSelection', value: '(清除選取)', comment: 'clear dropdown selection' },
    Clock: { id: 'Clock', value: '時鐘', comment: 'Clock tooltip' },
    Close: { id: 'Close', value: '關閉', comment: 'Tooltip for a Close Button Action' },
    Clickable: { id: 'Clickable', value: '可以在編輯器中點按', comment: 'Clickable in editor' },
    Copy: { id: 'Copy', value: '複製', comment: 'Copy tooltip' },
    Collapse: { id: 'Collapse', value: '折疊', comment: 'Collapse / close a tree/submenu' },
    CollapseAppTray: { id: 'CollapseAppTray', value: '折疊 App 托盤', comment: 'Collapse App Tray tooltip' },
    Columns: { id: 'Columns', value: '直欄', comment: 'Columns tooltip' },
    Comments: { id: 'Comments', value: '註解', comment: 'Comments on an form' },
    CompanyHoliday: { id: 'CompanyHoliday', value: '公司假期', comment: 'A holiday provided by work.' },
    Component: { id: 'Component', value: '元件', comment: 'As in a UI component - building block.' },
    Compose: { id: 'Compose', value: '撰寫', comment: 'Compose tooltip' },
    Completed: { id: 'Completed', value: '已完成', comment: 'Text For a Completed Status' },
    Confirm: { id: 'Confirm', value: '確認', comment: 'Confirm tooltip' },
    ConfirmOnPage: { id: 'ConfirmOnPage', value: '確認訊息，頁面', comment: 'Confirm message(s) on page n' },
    CookiesEnabled: { id: 'CookiesEnabled', value: '已啟用 Cookie', comment: 'Returns if browser cookies are enabled or not.' },
    Contains: { id: 'Contains', value: '包含', comment: 'Contains in icons for filtering' },
    CssClass: { id: 'CssClass', value: 'Css 類別', comment: 'Label for entering a Css Class name' },
    Cut: { id: 'Cut', value: '剪下', comment: 'Cut tooltip' },
    Dark: { id: 'Dark', value: '深色', comment: 'The name of one of the application theme variants.' },
    Date: { id: 'Date', value: '日期', comment: 'Describes filtering by a date data type' },
    Day: { id: 'Day', value: '日', comment: 'Shows view with day events' },
    Days: { id: 'Days', value: '天 ', comment: 'Show how many days until an event' },
    DaysOverdue: { id: 'DaysOverdue', value: '{0} 天到期', comment: 'For a task /date UI' },
    DaysRemaining: { id: 'DaysRemaining', value: '{0} 天剩餘', comment: 'For a task /date UI' },
    Default: { id: 'Default', value: '預設', comment: 'Refers to a default object of a generic type' },
    Delete: { id: 'Delete', value: '刪除', comment: 'Delete Toolbar Action Tooltip' },
    DeleteEvent: { id: 'DeleteEvent', value: '刪除事件', comment: 'Delete an Event (from a calendar)' },
    DeviceName: { id: 'Device', value: '裝置', comment: 'Name of the Device' },
    DistributeHoriz: { id: 'DistributeHoriz', value: '水平均分', comment: 'Icon button tooltip for action that distributes elements across Horizontally' },
    Document: { id: 'Document', value: '文件', comment: 'Document tooltip' },
    DiscretionaryTimeOff: { id: 'DiscretionaryTimeOff', value: '自主休假', comment: 'As in work time off' },
    Dirty: { id: 'Dirty', value: '列已變更', comment: 'Record is dirty / modified' },
    Drilldown: { id: 'Drilldown', value: '向下切入', comment: 'Drill by moving page flow into a record' },
    Drillup: { id: 'Drillup', value: '向上切入', comment: 'Opposite of Drilldown, move back up to a larger set of records' },
    Dropdown: { id: 'Dropdown', value: '下拉式清單', comment: 'Dropdown' },
    DoesNotContain: { id: 'DoesNotContain', value: '不包含', comment: 'Does Not Contain in icons for filtering' },
    DoesNotEndWith: { id: 'DoesNotEndWith', value: '結尾並非為', comment: 'For condition filtering' },
    DoesNotEqual: { id: 'DoesNotEqual', value: '不等於', comment: 'Does Not Equal in icons for filtering' },
    DoesNotStartWith: { id: 'DoesNotStartWith', value: '開頭並非為', comment: 'For condition filtering' },
    Down: { id: 'Down', value: '下', comment: 'Down tooltip' },
    Download: { id: 'Download', value: '下載', comment: 'Download tooltip' },
    Duplicate: { id: 'Duplicate', value: '複製', comment: 'Duplicate tooltip' },
    EitherSelectedOrNotSelected: { id: 'EitherSelectedOrNotSelected', value: '已選取項或未選取項', comment: 'Either Selected Or NotSelected in icons for filtering' },
    EndsWith: { id: 'EndsWith', value: '結尾為', comment: 'for condition filtering' },
    EnterComments: { id: 'EnterComments', value: '請在此處輸入評論...', comment: 'Placeholder text for a text input (comments)' },
    Error: { id: 'Error', value: '錯誤', comment: 'Title, Spoken Text describing fact an error has occured' },
    ErrorAllowedTypes: { id: 'ErrorAllowedTypes', value: '不允許的檔案類型', comment: 'Error string for file-upload' },
    ErrorMaxFileSize: { id: 'ErrorMaxFileSize', value: '超出檔案大小限制', comment: 'Error string for file-upload' },
    ErrorMaxFilesInProcess: { id: 'ErrorMaxFilesInProcess', value: '超出允許的檔案上限', comment: 'Error string for file-upload' },
    ErrorOnPage: { id: 'ErrorOnPage', value: '錯誤訊息，頁面', comment: 'Error message(s) on page n' },
    EmailValidation: { id: 'EmailValidation', value: '電子郵件地址無效', comment: 'This the rule for email validation' },
    Emerald: { id: 'Emerald', value: '祖母綠', comment: 'Color in our color pallette' },
    Expand: { id: 'Expand', value: '展開', comment: 'Expand open a tree/submenu' },
    ExpandAppTray: { id: 'ExpandAppTray', value: '展開 App 托盤', comment: 'ExpandAppTray tooltip' },
    ExpandCollapse: { id: 'ExpandCollapse', value: '展開/折疊', comment: 'Text to toggle a button in a container.' },
    ExportAsSpreadsheet: { id: 'ExportAsSpreadsheet', value: '匯出為試算表', comment: 'Export as Spreadsheet tooltip' },
    Edit: { id: 'Edit', value: '編輯', comment: 'Edit tooltip' },
    Equals: { id: 'Equals', value: '等於', comment: 'Equals in icons for filtering' },
    Event: { id: 'Event', value: '事件', comment: 'As in an event that would be in a calendar' },
    ExitFullView: { id: 'ExitFullView', value: '退出完整檢視', comment: 'Exit Full View tooltip' },
    Export: { id: 'Export', value: '匯出', comment: 'Export tooltip' },
    ExportToExcel: { id: 'ExportToExcel', value: '匯出至 Excel', comment: 'Export To Excel menu option in datagrid' },
    Favorite: { id: 'Favorite', value: '我的最愛', comment: 'A favorite item' },
    FileUpload: { id: 'FileUpload', value: '檔案上載。請按 Enter 鍵來瀏覽檔案', comment: 'Screen Reader instructions' },
    FieldFilter: { id: 'FieldFilter', value: '欄位篩選', comment: 'Used for Field Filter' },
    Filter: { id: 'Filter', value: '篩選', comment: 'Filter tooltip' },
    FirstPage: { id: 'FirstPage', value: '第一頁', comment: 'First Page tooltip' },
    Folder: { id: 'Folder', value: '資料夾', comment: 'Folder tooltip' },
    From: { id: 'From', value: '自', comment: 'Start of a range (of dates)' },
    FullView: { id: 'FullView', value: '完整檢視', comment: 'Full View tooltip' },
    GoForward: { id: 'GoForward', value: '向前', comment: 'Move Page / object this direction' },
    GoBack: { id: 'GoBack', value: '向後', comment: 'Move Page / object this directionp' },
    GoDown: { id: 'GoDown', value: '向下', comment: 'Move Page / object this directionp' },
    GoUp: { id: 'GoUp', value: '向上', comment: 'Move Page / object this direction' },
    Go: { id: 'Go', value: '執行', comment: 'Go, perform a movement, start a search, move to the next "thing" in a workflow.' },
    Graphite: { id: 'Graphite', value: '石墨色', comment: 'Color in our color pallette' },
    GreaterOrEquals: { id: 'GreaterOrEquals', value: '大於或等於', comment: 'Greater Than Or Equals in icons for filtering' },
    GreaterThan: { id: 'GreaterThan', value: '大於', comment: 'Greater Than in icons for filtering' },
    Grid: { id: 'Grid', value: '格線', comment: 'Grid tooltip' },
    Group: { id: 'Group', value: '群組', comment: 'Group of data in a datagrid with grouped rows' },
    Groups: { id: 'Groups', value: '群組', comment: 'Plural for group' },
    GroupsPerPage: { id: 'GroupsPerPage', value: '每頁 {0} 個群組', comment: 'Dropdown allows the user to select how many visible Groups the {} placeholder shows value.' },
    Hour: { id: 'Hour', value: '小時', comment: 'the hour portion of a time' },
    Hours: { id: 'Hours', value: '小時', comment: 'the hour portion of a time (plural)' },
    HeadingThree: { id: 'HeadingThree', value: '標題三', comment: 'Heading Three tooltip' },
    HeadingFour: { id: 'HeadingFour', value: '標題四', comment: 'Heading Four tooltip' },
    HighContrast: { id: 'HighContrast', value: '高對比', comment: 'The name of a theme variant' },
    Highest: { id: 'Highest', value: '最高', comment: 'Highest Four tooltip' },
    Home: { id: 'Home', value: '首頁', comment: 'Home tooltip' },
    HtmlView: { id: 'HtmlView', value: 'HTML 檢視', comment: 'Html View tooltip' },
    Image: { id: 'Image', value: '影像', comment: 'Image of something' },
    Import: { id: 'Import', value: '匯入', comment: 'Import tooltip' },
    Info: { id: 'Info', value: '資訊', comment: 'Info tooltip' },
    InfoOnPage: { id: 'InfoOnPage', value: '資訊訊息，頁面', comment: 'Information message(s) on page n' },
    InProgress: { id: 'In Progress', value: '進行中', comment: 'Info tooltip that an action is in progress' },
    Insert: { id: 'Insert', value: '插入', comment: 'Insert Modal Dialog Button' },
    InsertAnchor: { id: 'InsertAnchor', value: '插入錨點', comment: 'Insert Acnhor (link) in an editor' },
    InsertImage: { id: 'InsertImage', value: '插入影像', comment: 'Insert Image in an editor' },
    InsertLink: { id: 'InsertLink', value: '插入連結', comment: 'Insert Link in an editor' },
    InsertUrl: { id: 'InsertUrl', value: '插入 URL', comment: 'Insert a Url in an editor' },
    Italic: { id: 'Italic', value: '斜體', comment: 'Make Text Italic' },
    InvalidDate: { id: 'InvalidDate', value: '無效日期', comment: 'validation message for wrong date format (short)' },
    InvalidTime: { id: 'InvalidTime', value: '無效時間', comment: 'validation message for wrong time format' },
    Inventory: { id: 'Inventory', value: '庫存', comment: 'Icon button tooltop for Inventory Action' },
    InRange: { id: 'InRange', value: '範圍', comment: 'In Range in icons for filtering' },
    IsEmpty: { id: 'IsEmpty', value: '為空', comment: 'Is Empty in icons for filtering' },
    IsNotEmpty: { id: 'IsNotEmpty', value: '不為空', comment: 'Is Not Empty in icons for filtering' },
    ItemsSelected: { id: 'ItemsSelected', value: '個項目已選取', comment: 'Num of Items selected for swaplist' },
    JustifyCenter: { id: 'JustifyCenter', value: '置中', comment: 'justify text to center in the editor' },
    JustifyLeft: { id: 'JustifyLeft', value: '靠左對齊', comment: 'justify text to left in the editor' },
    JustifyRight: { id: 'JustifyRight', value: '靠右對齊', comment: 'justify text to right in the editor' },
    Keyword: { id: 'Keyword', value: '關鍵字', comment: 'Describes filtering by a keyword search' },
    Launch: { id: 'Launch', value: '啟動', comment: 'Launch' },
    LastPage: { id: 'LastPage', value: '最後一頁', comment: 'Last Page tooltip' },
    Left: { id: 'Left', value: '左', comment: 'Left tooltip' },
    Legend: { id: 'Legend', value: '圖例', comment: 'As in a chart legend' },
    LessOrEquals: { id: 'LessOrEquals', value: '小於或等於', comment: 'Less Than Or Equals in icons for filtering' },
    LessThan: { id: 'LessThan', value: '小於', comment: 'Less Than in icons for filtering' },
    Light: { id: 'Light', value: '淺色', comment: 'The name of one of the application theme variants.' },
    Link: { id: 'Link', value: '連結', comment: 'Link - as in hyperlink - icon tooltop' },
    Load: { id: 'Load', value: '載入', comment: 'Load icon tooltip' },
    Loading: { id: 'Loading', value: '正在載入', comment: 'Text below spinning indicator to indicate loading' },
    Locale: { id: 'Locale', value: '地區設定', comment: 'The users locale string for example en-US, it-It' },
    Locked: { id: 'Locked', value: '已鎖定', comment: 'Locked tooltip' },
    Logout: { id: 'Logout', value: '登出', comment: 'Log out of the application' },
    Lookup: { id: 'Lookup', value: '查閱', comment: 'Lookup - As in looking up a record or value' },
    Lowest: { id: 'Lowest', value: '下限', comment: 'Lowest - As in Lowest value' },
    Mail: { id: 'Mail', value: '郵件', comment: 'Mail tooltip' },
    MapPin: { id: 'MapPin', value: '大頭針', comment: 'Map Pin tooltip' },
    Maximize: { id: 'Maximize', value: '最大化', comment: 'Maximize a screen or dialog in the UI' },
    Median: { id: 'Median', value: '中間值', comment: 'Median in Mathematics' },
    Medium: { id: 'Medium', value: '中', comment: 'Describes a Medium sized Row Height in a grid/list' },
    Menu: { id: 'Menu', value: '功能表', comment: 'Menu tooltip' },
    MingleShare: { id: 'MingleShare', value: '使用 Ming.le 分享', comment: 'Share the contextual object/action in the mingle system' },
    Minutes: { id: 'Minutes', value: '分鐘', comment: 'the minutes portion of a time' },
    Minimize: { id: 'Minimize', value: '最小化', comment: 'Minimize tooltip' },
    Minus: { id: 'Minus', value: '減', comment: 'Minus tooltip' },
    Mobile: { id: 'Mobile', value: '移动电话', comment: 'Indicates a mobile device (phone tablet ect)' },
    Month: { id: 'Month', value: '月', comment: 'As in a date month' },
    More: { id: 'More', value: '更多', comment: 'Text Indicating More Buttons or form content' },
    MoreActions: { id: 'MoreActions', value: '更多動作', comment: 'Text on the More Actions button indictating hidden functions' },
    MoveToLeft: { id: 'MoveToLeft', value: '左移', comment: 'Button tooltip used in a list of movable items' },
    MoveToRight: { id: 'MoveToRight', value: '右移', comment: 'Button tooltip used in a list of movable items' },
    MsgDirty: { id: 'MsgDirty', value: ', 已修改', comment: 'for modified form fields' },
    New: { id: 'New', value: '新增', comment: 'Add new rowstatus in datagrid' },
    NewEvent: { id: 'NewEvent', value: '新增事件', comment: 'Menu item for adding a new calendar event.' },
    NewEventDetails: { id: 'NewEventDetails', value: '新增事件明細', comment: 'Placholder text for adding a new calendar event.' },
    NewDocument: { id: 'NewDocument', value: '新增文件', comment: 'New Document tooltip' },
    NewItem: { id: 'NewItem', value: '新增項目', comment: 'New item in listbuilder' },
    NewWindow: { id: 'NewWindow', value: '新增視窗', comment: 'Contents open in a new browser window.' },
    Next: { id: 'Next', value: '下一個', comment: 'Next in icons tooltip' },
    NextPage: { id: 'NextPage', value: '下一頁', comment: 'Next on Pager' },
    NextMonth: { id: 'NextMonth', value: '下一個月', comment: 'the label for the button that moves calendar to next/prev' },
    No: { id: 'No', value: '否', comment: 'On a dialog button' },
    NoCommentsEntered: { id: 'NoCommentsEntered', value: '未輸入評論', comment: 'Placeholder for where no comments are added.' },
    NoData: { id: 'NoData', value: '無可用資料', comment: 'Shown when there is no rows shown in a list' },
    NoDataFilter: { id: 'NoDataFilter', value: '無可用資料，請選取新的篩選器以查看更多結果。', comment: 'Shown when there is no rows shown in a list' },
    NoDataList: { id: 'NoDataList', value: '無可用資料，請在上面的清單中進行選取以查看更多結果。', comment: 'Shown when there is no rows shown in a list' },
    None: { id: 'None', value: '無', comment: 'None to pick clear color' },
    NoResults: { id: 'NoResults', value: '無結果', comment: 'Search Results Text' },
    NoTitle: { id: 'NoTitle', value: '(無標題)', comment: 'Placeholder text for when you add an event to the calendar with no title typed.' },
    Normal: { id: 'Normal', value: '一般', comment: 'Normal row height' },
    Notes: { id: 'Notes', value: '附註', comment: 'Notes icon tooltip' },
    NotSelected: { id: 'NotSelected', value: '未選取', comment: 'Not Selected in icons for filtering' },
    NumberList: { id: 'NumberList', value: '數字清單', comment: 'Number List tooltip' },
    Ok: { id: 'Ok', value: '確定', comment: 'Ok button on a dialog' },
    OpenBackClose: { id: 'OpenBackClose', value: '開啟/返回/關閉', comment: 'Open / Back / Close tooltip' },
    OpenClose: { id: 'OpenClose', value: '開啟/關閉', comment: 'Open / Close tooltip' },
    OperatingSystem: { id: 'OperatingSystem', value: '作業系統', comment: 'Device Operating System' },
    OrderedList: { id: 'OrderedList', value: '插入/移除編號清單', comment: 'Insert an Ordered list in the editor' },
    Page: { id: 'Page', value: '頁 ', comment: 'Text on the pager links' },
    PageOf: { id: 'PageOf', value: '第 {0} 頁，共 {1} 頁', comment: 'Pager Text Showing current and number of pages' },
    PageOn: { id: 'PageOn', value: '您正在瀏覽的頁面是 ', comment: 'Text on the pager links' },
    PaidTimeOff: { id: 'PaidTimeOff', value: '帶薪休假', comment: 'As in vacation from work' },
    Paste: { id: 'Paste', value: '貼上', comment: 'Paste icon tooltip' },
    PasswordValidation: { id: 'PasswordValidation', value: '<strong>密碼</strong><br>至少必須為 10 個字元<br>至少具有一個大寫字元<br>至少必須具有一個小寫字元<br>包含一個特殊字元<br>不包含您的使用者名稱<br>不得為之前使用過的密碼<br>', comment: 'Password validation requirements' },
    PasswordConfirmValidation: { id: 'PasswordConfirmValidation', value: '密碼必須相符', comment: 'Password Confirm validation' },
    Peak: { id: 'Peak', value: '尖峰', comment: 'the max or peak value in a chart' },
    Pending: { id: 'Pending', value: '擱置中', comment: 'An event or task is pending' },
    PersonalizeColumns: { id: 'PersonalizeColumns', value: '個人化直欄', comment: 'Customize Columns in a Grid' },
    Plan: { id: 'Plan', value: '計劃', comment: 'As in type of vacation plan' },
    Platform: { id: 'Platform', value: '平台', comment: 'The users operating system i.e. mac, windows' },
    Period: { id: 'Period', value: '期間', comment: 'the am/pm portion of a time' },
    PressDown: { id: 'PressDown', value: '按向下箭頭，以選取日期', comment: 'the audible label for Tooltip about how to operate the date picker' },
    PressShiftF10: { id: 'PressShiftF10', value: '按 Shift+F10 來開啟操作功能表。', comment: 'the audible infor for screen readers on how to use a field with a popup menu' },
    Previous: { id: 'Previous', value: '上一個', comment: 'Previous icon tooltip - moved to previous record' },
    PreviousMonth: { id: 'PreviousMonth', value: '上一個月', comment: 'the label for the button that moves calendar to next/prev' },
    PreviousPage: { id: 'PreviousPage', value: '上一頁', comment: 'Previous Page tooltip' },
    Print: { id: 'Print', value: '列印', comment: 'Print tooltip' },
    Range: { id: 'Range', value: '範圍', comment: 'Range for tooltip' },
    RecordsPerPage: { id: 'RecordsPerPage', value: '每頁顯示 {0} 筆記錄', comment: 'Dropdown allows the user to select how many visible records {} shows select value.' },
    Redo: { id: 'Redo', value: '重做', comment: 'Redo tooltip' },
    ReorderRows: { id: 'ReorderRows', value: '重新排序列', comment: 'Drag and Reorder Grid Rows' },
    Refresh: { id: 'Refresh', value: '重新整理', comment: 'Refresh tooltip' },
    RequestTimeOff: { id: 'RequestTimeOff', value: '要求休假', comment: 'Making a request for time off work.' },
    Required: { id: 'Required', value: '必要', comment: 'indicates a form field is manditory' },
    Reset: { id: 'Reset', value: '重設', comment: 'Reset tooltip' },
    ResetDefault: { id: 'ResetDefault', value: '重設為預設值', comment: 'Reset Datagrid Columns, Filter and other Layout' },
    Result: { id: 'Result', value: '結果', comment: 'Showing a single result in a List' },
    Results: { id: 'Results', value: '結果', comment: 'As in showing N Results (plural) in a List' },
    ResultOf: { id: 'ResultOf', value: '第 {0} 個結果，共 {1} 個', comment: 'Text Showing current and total number of Result' },
    ResultsOf: { id: 'ResultsOf', value: '第 {0} 個結果，共 {1} 個', comment: 'Text Showing current and total number of Results' },
    RightAlign: { id: 'RightAlign', value: '靠右對齊', comment: 'Right Align tooltip' },
    RightAlignText: { id: 'RightAlignText', value: '靠右對齊', comment: 'Right Align Text tooltip' },
    Right: { id: 'Right', value: '右', comment: 'Right' },
    Roles: { id: 'Roles', value: '角色', comment: 'Roles tooltip' },
    RowHeight: { id: 'RowHeight', value: '列高度', comment: 'Describes the Height for Rows in a Data Grid' },
    Ruby: { id: 'Ruby', value: '紅寶石色', comment: 'Color in our color pallette' },
    RunFilter: { id: 'RunFilter', value: '執行篩選', comment: 'Execute the current filter criteria' },
    SameWindow: { id: 'SameWindow', value: '同一視窗', comment: 'Contents open in the same browser window.' },
    Save: { id: 'Save', value: '儲存', comment: 'Save tooltip' },
    SaveCurrentView: { id: 'SaveCurrentView', value: '儲存目前檢視', comment: 'Datagrids contain view sets. This menu option saves them' },
    SavedViews: { id: 'SavedViews', value: '儲存的檢視', comment: 'Label for a list of Views' },
    Schedule: { id: 'Schedule', value: '時間表', comment: 'Shows a schedule view' },
    Seconds: { id: 'Seconds', value: '秒', comment: 'the seconds portion of a time' },
    Search: { id: 'Search', value: '搜尋', comment: 'Search tooltip' },
    SearchColumnName: { id: 'SearchColumnName', value: '搜尋直欄名稱', comment: 'Search for a datagrid column by name' },
    SearchFolder: { id: 'SearchFolder', value: '在資料夾中搜尋', comment: 'Search Folder tooltip' },
    SearchList: { id: 'SearchList', value: '搜尋清單', comment: 'Search List tooltip' },
    Select: { id: 'Select', value: '選取', comment: 'text describing a select action' },
    SelectDay: { id: 'SelectDay', value: '選取日期', comment: 'Select a day in the calendar picker' },
    Selected: { id: 'Selected', value: '已選取', comment: 'text describing a selected object' },
    SelectAll: { id: 'SelectAll', value: '全選', comment: 'describes the action of selecting all items available in a list' },
    Send: { id: 'Send', value: '傳送', comment: 'Send tooltip' },
    SetTime: { id: 'SetTime', value: '設定時間', comment: 'button text that inserts time when clicked' },
    Settings: { id: 'Settings', value: '設定', comment: 'Settings tooltip' },
    Short: { id: 'Short', value: '矮', comment: 'Describes a Shorted Row Height in a grid/list' },
    ShowEvent: { id: 'ShowEvent', value: '顯示事件', comment: 'Show an event (in a calendar)' },
    ShowFilterRow: { id: 'ShowFilterRow', value: '顯示篩選列', comment: 'Toggle a row with filer info above a list' },
    ShowLess: { id: 'ShowLess', value: '顯示更少', comment: 'Show less form content' },
    ShowMore: { id: 'ShowMore', value: '顯示更多', comment: 'Show more form content' },
    SohoDarkTheme: { id: 'SohoDarkTheme', value: 'Soho 深色', comment: 'The name of an application Theme' },
    SohoLightTheme: { id: 'SohoLightTheme', value: 'Soho 淺色', comment: 'The name of an application Theme' },
    SohoHighContrastTheme: { id: 'SohoHighContrastTheme', value: 'Soho 高對比', comment: 'The name of an application Theme' },
    SickTime: { id: 'SickTime', value: '病假', comment: 'Time off sick from work' },
    Slate: { id: 'Slate', value: '青灰色', comment: 'Color in our color pallette' },
    SlideOf: { id: 'SlideOf', value: '第 {0} 幅投影片，共 {1} 幅', comment: 'Slide Text Showing current and total number of slides' },
    SlidesOf: { id: 'SlidesOf', value: '第 {0} 及 {1} 幅投影片，共 {2} 幅', comment: 'Slides Text Showing current slides and total number of slides' },
    SliderHandle: { id: 'SliderHandle', value: '控點用於', comment: 'Description of the portion of a Slider control that is focusable and changes its value, followed in code by the name of the control' },
    SliderMaximumHandle: { id: 'SliderMaximumHandle', value: '範圍上限控點用於', comment: 'Describes a maximum value handle in a Range (double slider), followed in code by the name of the control' },
    SliderMinimumHandle: { id: 'SliderMinimumHandle', value: '範圍下限控點用於', comment: 'Describes a minimum value handle in a Range (double slider), followed in code by the name of the control' },
    SkipToMain: { id: 'SkipToMain', value: '跳至主內容', comment: 'Skip link in header, jumps when clicked on to main area' },
    Status: { id: 'Status', value: '狀態', comment: 'Status of someting thats submitted fx in progress, approved' },
    StartsWith: { id: 'StartsWith', value: '開頭為', comment: 'for condition filtering' },
    StepsCompleted: { id: 'StepsCompleted', value: '已完成第 {0} 步，共 {1} 個步驟', comment: 'steps of a wizard/chart' },
    StrikeThrough: { id: 'StrikeThrough', value: '刪除線', comment: 'turn on and off strike through text in text editor (like word)' },
    SortAtoZ: { id: 'SortAtoZ', value: '遞增排序', comment: 'Sort A to Z in icons for filtering' },
    SortZtoA: { id: 'SortZtoA', value: '遞減排序', comment: 'Sort Z to A in icons for filtering' },
    SortDown: { id: 'SortDown', value: '向下排序', comment: 'Sort Down tooltip' },
    SortUp: { id: 'SortUp', value: '向上排序', comment: 'Sort Up tooltip' },
    Subscript: { id: 'Subscript', value: '下標', comment: 'Turn on and off Subscript text in text editor (like word)' },
    Subtle: { id: 'Subtle', value: '輕微', comment: 'The title of one of the application themes.' },
    Superscript: { id: 'Superscript', value: '上標', comment: 'Turn on and off Superscript text in text editor (like word)' },
    Tabs: { id: 'Tabs', value: '索引標籤...', comment: 'Used in the Tabs Control\'s more menu, preceeded by a number that describes how many tabs are in the spillover menu' },
    Tack: { id: 'Tack', value: '大頭針', comment: 'Pin an object' },
    Tall: { id: 'Tall', value: '高', comment: 'Describes a Taller Row Height in a grid/list' },
    Target: { id: 'Target', value: '目標', comment: 'Label for an input to enter a Target (Url Attribute)' },
    TeamEvent: { id: 'TeamEvent', value: '小組事件', comment: 'Having an event with a work team' },
    TestLocaleDefaults: { id: 'TestLocaleDefaults', value: '測試地區設定預設值', comment: 'Do not translate' },
    TextColor: { id: 'TextColor', value: '文字色彩', comment: 'add or edit text color in the editor' },
    TextDropArea: { id: 'DropArea', value: '拖放檔案以上載', comment: 'text for drop area for advanced fileupload' },
    TextDropAreaWithBrowse: { id: 'TextDropAreaWithBrowse', value: '拖放或<span class="hyperlink">選取檔案</span>以上載', comment: 'text for drop area with browse for advanced fileupload' },
    TextBtnCancel: { id: 'TextBtnCancel', value: '取消上載此檔案', comment: 'text for cancel button for advanced fileupload' },
    TextBtnCloseError: { id: 'TextBtnCloseError', value: '關閉此錯誤', comment: 'text for error close button for advanced fileupload' },
    TextBtnRemove: { id: 'TextBtnRemove', value: '關閉此錯誤', comment: 'text for remove button for advanced fileupload' },
    Timer: { id: 'Timer', value: '計時器', comment: 'Timer tooltip' },
    To: { id: 'To', value: '至', comment: 'End of a range (of dates)' },
    Today: { id: 'Today', value: '今天', comment: 'refering to today on a calendar' },
    ToggleBold: { id: 'ToggleBold', value: '切換粗體文字', comment: 'turn on and off bold in text editor (like word)' },
    ToggleH3: { id: 'ToggleH3', value: '切換標題 3', comment: 'turn on and off heading 3 text' },
    ToggleH4: { id: 'ToggleH4', value: '切換標題 4', comment: 'turn on and off heading 4 text' },
    ToggleItalic: { id: 'ToggleItalic', value: '切換斜體文字', comment: 'turn on and off Italic in text editor (like word)' },
    ToggleUnderline: { id: 'ToggleUnderline', value: '切換底線文字', comment: 'turn on and off Underline in text editor (like word)' },
    Toolbar: { id: 'Toolbar', value: '工具列', comment: 'describing the toolbar component' },
    TopAlign: { id: 'TopAlign', value: '靠上對齊', comment: 'Top Align tooltip' },
    Total: { id: 'Total', value: '總計', comment: 'Mathematic total of a calculation' },
    Totals: { id: 'Totals', value: '總計', comment: 'Mathematic total of a calculation (plural)' },
    TreeCollapse: { id: 'TreeCollapse', value: '折疊樹狀目錄', comment: 'Tree Collapse tooltip' },
    TreeExpand: { id: 'TreeExpand', value: '展開樹狀目錄', comment: 'Tree Expand tooltip' },
    Turquoise: { id: 'Turquoise', value: '藍綠色', comment: 'Color in our color pallette' },
    TypeToFilter: { id: 'TypeToFilter', value: '鍵入以篩選', comment: 'Screen reader hit for screen reader users.' },
    Up: { id: 'Up', value: '上', comment: 'Up tooltip' },
    UpComing: { id: 'UpComing', value: '即將到來的事件', comment: 'List of upcoming things (general)' },
    UpComingEvents: { id: 'UpComingEvents', value: '即將到來的事件', comment: 'List of upcoming calendar events' },
    UpComingTimeOff: { id: 'UpComingTimeOff', value: '即將到來的休假', comment: 'As in time off work' },
    UpliftDarkTheme: { id: 'UpliftDarkTheme', value: '提升深色', comment: 'The name of an application Theme' },
    UpliftHighContrastTheme: { id: 'UpliftHighContrastTheme', value: '提升高對比', comment: 'The name of an application Theme' },
    UpliftLightTheme: { id: 'UpliftLightTheme', value: '提升淺色', comment: 'The name of an application Theme' },
    Upload: { id: 'Upload', value: '上載', comment: 'Upload tooltip' },
    UnavailableDate: { id: 'UnavailableDate', value: '不可用日期', comment: 'Unavailable Date Text' },
    Underline: { id: 'Underline', value: '底線', comment: 'Make text Underlined' },
    Undo: { id: 'Undo', value: '復原', comment: 'Undo tooltip' },
    Unlocked: { id: 'Unlocked', value: '已解除鎖定', comment: 'Unlocked tooltip' },
    UnorderedList: { id: 'UnorderedList', value: '插入/移除項目符號清單', comment: 'Insert an Unordered list in the editor' },
    Unsupported: { id: 'Unsupported', value: '此內容不可用，您目前的瀏覽器版本不支援該內容使用的功能。', comment: 'Suggesting browser upgrade for missing features.' },
    Url: { id: 'Url', value: 'Url', comment: 'Url tooltip' },
    UseArrow: { id: 'UseArrow', value: '使用方向鍵來選取。', comment: 'Instructional comments for screen readers' },
    UseEnter: { id: 'UseEnter', value: '使用 Enter 或向下鍵來查閱。', comment: 'Instructional comments for screen readers' },
    User: { id: 'User', value: '使用者', comment: 'User tooltip' },
    UserProfile: { id: 'UserProfile', value: '使用者設定檔', comment: 'User Profile tooltip' },
    Version: { id: 'Version', value: 'IDS 版本', comment: 'Version of IDS' },
    VerticalMiddleAlign: { id: 'VerticalMiddleAlign', value: '垂直置中對齊', comment: 'Vertical Align tooltip' },
    Vibrant: { id: 'Vibrant', value: '鮮豔', comment: 'The title of one of the application themes.' },
    ViewSource: { id: 'ViewSource', value: '檢視原始檔', comment: 'Toggle the source view in the editor' },
    ViewVisual: { id: 'ViewVisual', value: '檢視視覺效果', comment: 'Toggle the visual view in the editor' },
    Week: { id: 'Week', value: '星期', comment: 'Shows a view of the current weeks events' },
    Year: { id: 'Year', value: '年', comment: 'As in a date year' },
    Yes: { id: 'Yes', value: '是', comment: 'On a dialog button' }
  }
});
