"use strict";

class AdditionalClothingDigitalFlora
{
	static onLoadMod() 
	{
		// Constants
		const db = `user/mods/AdditionalClothing_DigitalFloraPack/db/`;
		
		// add tops
		JustNUCore.AddTop(db, "AddClothingDigitalFlora_EMRPolevoiUpper",	"AddClothingDigitalFlora/Tops/top_polevoi_emr.bundle",	"AddClothingDigitalFlora/Hands/hands_polevoi_emr.bundle", 	"5d1f5aca86f7744bce0ee9f1");
		JustNUCore.AddTop(db, "AddClothingDigitalFlora_EMRTigrUpper",		"AddClothingDigitalFlora/Tops/top_tiger_emr.bundle", 	"AddClothingDigitalFlora/Hands/hands_tiger_emr.bundle",		"5e9da26286f7741d2e3424a5");
		
		// add bottoms
		JustNUCore.AddBottom(db, "AddClothingDigitalFlora_EMRPolevoiLower",	"AddClothingDigitalFlora/Bottoms/bottom_polevoi_emr.bundle");
		JustNUCore.AddBottom(db, "AddClothingDigitalFlora_EMRCombatLower",	"AddClothingDigitalFlora/Bottoms/bottom_combat_emr.bundle");
	}
}
	
module.exports = AdditionalClothingDigitalFlora;