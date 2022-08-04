exports.convertDate = () => {
    let d = new Date();
    let datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes()+":"+d.getSeconds();
    return datestring;
}