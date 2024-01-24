function currency() {
    let UZS1 = document.getElementsByName['UZS'][0].value
    UZS2 = Number(UZS2)
    let USD1 = document.getElementsByName['USD'][0].value
    USD1 = UZS2 / 12440
}

function currency() {
    let UZS = document.getElementsByName('UZS')[0].value;
    let USD = Number(UZS) / 12440;
    document.getElementsByName('USD')[0].value = USD;
}
