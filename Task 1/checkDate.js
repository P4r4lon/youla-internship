function checkDate(timestamp) {

    //Для начала получим часы дня
    const hour = new Date(timestamp * 1000).getHours();
    //Далее получим текущее время в мс
    let currentDate = Date.now();

    // Так как требуется проверка совпадения дня, нам достаточно сравнить 2 числа, переведенные из секунд и мс в дни:
    timestamp = Math.floor(timestamp / 86400) // секунды / 60 / 60 / 24
    currentDate = Math.floor(currentDate / 86400000) // мс / 1000 / 60 / 60 / 24

    const isSameDate = currentDate === timestamp //теперь можем сравнить 2 числа без создания новых объектов и вызова методов

    return {
        isSameDate: isSameDate,
        dayPeriod: hour > 11 ? 'pm' : 'am'
    }
}
