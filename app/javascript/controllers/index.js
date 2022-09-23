import { application } from "./application"
import AnimatedNumber from 'stimulus-animated-number'
import CharacterCounter from 'stimulus-character-counter'


import HelloController from "./hello_controller"
application.register("hello", HelloController)
application.register('animated-number', AnimatedNumber)
application.register('character-counter', CharacterCounter)
