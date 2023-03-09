import { faker } from '@faker-js/faker'
import $ from 'jquery'
import datepicker from 'js-datepicker'
import '@/node_modules/js-datepicker/dist/datepicker.min.css'
import moment from 'moment/moment'
import '../css/main.scss'

let fakerContainer = document.querySelector("#faker")
let momentContainer = document.querySelector("#moment")

fakerContainer.innerHTML = faker.name.fullName();
$('body').css('background-color', 'red')
const picker = datepicker('#js-datepicker')

setInterval(() => {
    momentContainer.innerHTML = moment()
}, 1000)