class Mod
{
    constructor()
    {
		Logger.info("Loading: Additional Clothing - Digital Flora Pack");
		
		ModLoader.onLoad["AdditionalClothingDigitalFlora"] = require("./src/additionalclothing.js").onLoadMod;
    }
}

module.exports.Mod = new Mod();