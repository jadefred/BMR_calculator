function getLangResources() {
  let fr = new Array();
  let en = new Array();
  let hk = new Array();

  en["h1"] = "Basal Metabolic Rate Calculator";
  fr["h1"] = "Calculateur du métabolisme de base";
  hk["h1"] = "基礎代謝率計數機";

  en["title-description-bmr"] =
    "The Basal Metabolic Rate (BMR) Calculator estimates your basal metabolic rate the amount of energy expended while at rest in a neutrally temperate environment, and in a post-absorptive state.";
  fr["title-description-bmr"] =
    "Le calculateur de taux métabolique basal (BMR) estime votre taux métabolique basal la quantité d'énergie dépensée au repos dans un environnement tempéré neutre et dans un état post-absorptif.";
  hk["title-description-bmr"] =
    "基礎代謝率 (BMR) 計算器估算您的基礎代謝率，即在中性溫帶環境和吸收後狀態下休息時消耗的能量。";

  en["title-description-tdee"] =
    "Your Total Daily Energy Expenditure (TDEE) is an estimate of how many calories you burn each day when exercise is taken into account.";
  fr["title-description-tdee"] =
    "La dépense énergétique totale quotidienne (TDEE) est un indicateur à travers lequel vous apprenez combien de calories devez-vous brûler par jour";
  hk["title-description-tdee"] =
    "總熱量消耗 (TDEE) 是指人每天日常行動所消耗的熱量，因每個人身高、體重、肌肉量、活動量都不同而有差異。";

  en["result-bmr"] = "BMR Result";
  fr["result-bmr"] = "BMR Résultat";
  hk["result-bmr"] = "BMR 結果";

  en["calPerDay"] = "Calories/day";
  fr["calPerDay"] = "Calories/jour";
  hk["calPerDay"] = "卡路里/每日";

  en["gender"] = "Gender";
  fr["gender"] = "Le sexe";
  hk["gender"] = "性別";

  en["male"] = "Male";
  fr["male"] = "Masculin";
  hk["male"] = "男性";

  en["female"] = "Female";
  fr["female"] = "Feminine";
  hk["female"] = "女性";

  en["age"] = "Age";
  fr["age"] = "L'âge";
  hk["age"] = "年齡";

  en["height"] = "Height (cm) :";
  fr["height"] = "La taille (cm)";
  hk["height"] = "身高(厘米)";

  en["weight"] = "Weight (kg) :";
  fr["weight"] = "Le poids (kg)";
  hk["weight"] = "體重(公斤)";

  en["calculate"] = "Calculate";
  fr["calculate"] = "Calculer";
  hk["calculate"] = "計算 ";

  en["clear"] = "Clear";
  fr["clear"] = "Effacer";
  hk["clear"] = "清除";

  en["jeor"] = "Mifflin St. Jeor Formulas:";
  fr["jeor"] = "Formules de Mifflin St. Jeor";
  hk["jeor"] = "Mifflin St. Jeor 公式";

  en["jeor-m"] =
    "Men - 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) + 5 ";
  fr["jeor-m"] =
    "Masculin - 10 x le poids (kg) + 6.25 x la taille (cm) – 5 x âge (y) + 5 ";
  hk["jeor-m"] =
    "男性 - 10 x 體重 (公斤) + 6.25 x 身高 (厘米) – 5 x 年齡 (y) + 5 ";

  en["jeor-f"] =
    "Women - 10 x weight (kg) + 6.25 x height (cm) – 5 x age (y) + 5 ";
  fr["jeor-f"] =
    "Feminine - 10 x le poids (kg) + 6.25 x la taille (cm) – 5 x âge (y) + 5 ";
  hk["jeor-f"] =
    "女性 - 10 x 體重 (公斤) + 6.25 x 身高 (厘米) – 5 x 年齡 (y) + 5 ";

  en["tdee-formula"] =
    "TDEE is calculated by first figuring out your Basal Metabolic Rate, then multiplying that value by an activity multiplier.";
  fr["tdee-formula"] =
    "Le TDEE est calculé en déterminant d'abord votre taux métabolique de base, puis en multipliant cette valeur par un multiplicateur d'activité.";
  hk["tdee-formula"] =
    "TDEE的計算方法是先計算出您的基礎代謝率，然後將該值乘以活動乘數。";

  en["tdee-result"] = "TDEE Result";
  fr["tdee-result"] = "TDEE Résultat";
  hk["tdee-result"] = "TDEE 結果";

  en["1.2"] = "Sedentary (Little or no exercise)";
  fr["1.2"] = "Sédentaire (Peu ou pas d'exercice)";
  hk["1.2"] = "久坐不動（很少或沒有運動)";

  en["1.375"] = "Light Exercise (1 - 2 days / week)";
  fr["1.375"] = "Légèrement actif (1 - 2 jours / semaine)";
  hk["1.375"] = "偶爾運動（1 - 2 天/週)";

  en["1.55"] = "Moderate Exercise (3 - 5 days / week)";
  fr["1.55"] = "Modérément actif (3 - 5 jours / semaine)";
  hk["1.55"] = "常常運動 (3 - 5 /週)";

  en["1.725"] = "Heavy Exercise (6 - 7 days / week)";
  fr["1.725"] = "Très actif (6 - 7 jours / semaine)";
  hk["1.725"] = "每天運動 (6 - 7 /週)";

  en["1.9"] = "Athlete (2 times / days)";
  fr["1.9"] = "Athlète (2 fois / jours)";
  hk["1.9"] = "強度運動（每日兩次)";

  let resources = new Array();
  resources["fr"] = fr;
  resources["en"] = en;
  resources["hk"] = hk;

  return resources;
}

function changeLanguage(lng) {
  let resources = getLangResources()[lng];

  $('h1[name="translate"]').each(function (i, elt) {
    $(elt).text(resources[$(elt).attr("caption")]);
  });
  $('h2[name="translate"]').each(function (i, elt) {
    $(elt).text(resources[$(elt).attr("caption")]);
  });
  $('p[name="translate"]').each(function (i, elt) {
    $(elt).text(resources[$(elt).attr("caption")]);
  });
  $('label[name="translate"]').each(function (i, elt) {
    $(elt).text(resources[$(elt).attr("caption")]);
  });
  $('button[name="translate"]').each(function (i, elt) {
    $(elt).text(resources[$(elt).attr("caption")]);
  });
  $('span[name="translate"]').each(function (i, elt) {
    $(elt).text(resources[$(elt).attr("caption")]);
  });
}

$(function () {
  changeLanguage("en");

  $("#fr_button").click(function () {
    changeLanguage("fr");
  });

  $("#eng_button").click(function () {
    changeLanguage("en");
  });

  $("#hk_button").click(function () {
    changeLanguage("hk");
  });
});
