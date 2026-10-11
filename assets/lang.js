/* Toggle de idioma es|en: cambia el atributo lang de <html>.
 * El CSS oculta los textos del idioma inactivo y el estado se
 * guarda en localStorage. Por defecto el sitio está en inglés. */
(() => {
	const set_lang = (lang) => {
		document.documentElement.lang = lang;
		localStorage.setItem("lang", lang);
		const translated_title = document.documentElement.getAttribute("data-title-" + lang);
		if (translated_title) document.title = translated_title;
		for (const button of document.querySelectorAll(".lang-toggle button")) {
			button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
		}
	};

	const saved_lang = localStorage.getItem("lang");
	if (saved_lang === "es" || saved_lang === "en") set_lang(saved_lang);

	for (const button of document.querySelectorAll(".lang-toggle button")) {
		button.addEventListener("click", () => set_lang(button.dataset.lang));
	}
})();
