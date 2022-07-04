//This function converts seconds to hours:minutes:seconds
export function fancyTimeFormat(duration: number): string {
    // Hours, minutes and seconds
    let hrs = Math.floor((duration / 3600));
    let mins = Math.floor(((duration % 3600) / 60));
    let secs = Math.floor(duration % 60);

    // Output like "1:01" or "4:03:59" or "123:03:59"
    let ret = "";

    if (hrs > 0) {
        ret += "" + hrs + " hours " + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + " minutes " + (secs < 10 ? "0" : "");
    ret += "" + secs + " second";
    return ret;
}


