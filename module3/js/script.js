<script>
if (
  typeof ezConsentCategories == "object" &&
  typeof __ezconsent == "object"
) {
  //jede der Zustimmungsoptionen der Benutzer festlegen
  window.ezConsentCategories.preferences = true;
  window.ezConsentCategories.statistics = true;
  window.ezConsentCategories.marketing = true;

  //Aufruf zur Aktualisierung von ezoic der Consent Entscheidungen
  __ezconsent.setEzoicConsentSettings(window.ezConsentCategories);
}
</script>