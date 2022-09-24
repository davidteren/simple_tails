import { application } from "./application"
import AnimatedNumber from 'stimulus-animated-number'
import CharacterCounter from 'stimulus-character-counter'


application.register('animated-number', AnimatedNumber)
application.register('character-counter', CharacterCounter)


// Import and register all TailwindCSS Components
import { Alert, Autosave, Dropdown, Modal, Tabs, Popover, Toggle, Slideover } from "tailwindcss-stimulus-components"
application.register('alert', Alert)
application.register('autosave', Autosave)
application.register('dropdown', Dropdown)
application.register('modal', Modal)
application.register('tabs', Tabs)
application.register('popover', Popover)
application.register('toggle', Toggle)
application.register('slideover', Slideover)