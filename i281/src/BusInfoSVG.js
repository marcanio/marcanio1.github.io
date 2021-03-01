/*
If some poor soul is reading my code its 3 am on a Saturday.
Not even Allah can save us now.
*/

import TextSVG from "./TextSVG.js";
import PathSVG from "./PathSVG.js";


const SLASH_STYLE = {"stroke":"black", "stroke-width":"3px", "fill":"none"};
const LABEL_TEXT_STYLE = "font-family: Times New Roman; font-size: 22px; text-anchor:middle;fill:black; ";

export default class BussInfoSVG {
	constructor(wire_id, position, bus_width, text_orientation) {
        let TPOS;

        if(text_orientation.toLowerCase() === "left")
            TPOS = [-30, 20];
        else if (text_orientation.toLowerCase() === "right")
            TPOS = [20, 20];
        else 
            TPOS = [0, 0];

        this.slash = new PathSVG(wire_id + "info", ["M", position[0], position[1] , "l", -30, -30, "l", 30, 30], SLASH_STYLE);
		this.text = new TextSVG(TPOS[0], TPOS[1], wire_id + "info", bus_width, LABEL_TEXT_STYLE, position);

	}
    
	get_all_nodes() {
		let res = [];
		res.push(this.slash.get_node());
		res.push(this.text.get_node());
		return res;
	}
    

}



