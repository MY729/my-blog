import {
  Button,
  ButtonGroup,
  Select,
  Row,
  Col,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Popover,
  Badge,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination,
  Dialog,

  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Option,
  OptionGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Upload,
  Tooltip,
  Cascader,
  Card,
  Tag,

  Footer,
  Breadcrumb,
  BreadcrumbItem,
  Scrollbar,

  Alert,

  Loading,
  MessageBox,
  Message,
  Notification

} from 'element-ui'

const components = [
  Button,
  ButtonGroup,

  Select,
  Row,
  Col,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Popover,

  Badge,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination,
  Dialog,

  Footer,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Option,
  OptionGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Upload,
  Tooltip,
  Cascader,
  Card,
  Tag,

  Footer,
  Breadcrumb,
  BreadcrumbItem,
  Scrollbar,

  Alert
]

const install = (Vue) => {

  components.forEach(component => {
    Vue.use(component)
  })

  Vue.use(Loading.directive)

  Vue.$loading = Vue.prototype.$loading = Loading.service
  Vue.prototype.$msgbox = MessageBox
  Vue.$alert = Vue.prototype.$alert = MessageBox.alert
  Vue.prototype.$confirm = MessageBox.confirm
  Vue.prototype.$prompt = MessageBox.prompt
  Vue.prototype.$notify = Notification
  Vue.prototype.$message = Message
}

export default {
  install
}
