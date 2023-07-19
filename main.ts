microIoT.microIoT_MQTT_Event(microIoT.TOPIC.topic_0, function (message) {
    if (message == "smile") {
        basic.showIcon(IconNames.Happy)
    } else if (message == "sad") {
        basic.showIcon(IconNames.Sad)
    } else if (message == "yes") {
        basic.showIcon(IconNames.Yes)
    } else if (message == "no") {
        basic.showIcon(IconNames.No)
    } else {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # # .
            . . . . .
            . . # . .
            `)
    }
})
basic.showNumber(0)
let wifi_name = "izowifi"
let password = "izo1234@"
let iot_id = "lmZB9bXGR"
let iot_pwd = "liWfrxXMgz"
let topic_0 = "qwPmNL37g"
basic.showNumber(1)
microIoT.microIoT_initDisplay()
microIoT.microIoT_WIFI(wifi_name, password)
basic.showNumber(2)
microIoT.microIoT_MQTT(
iot_id,
iot_pwd,
topic_0,
microIoT.SERVERS.English
)
basic.showNumber(3)
