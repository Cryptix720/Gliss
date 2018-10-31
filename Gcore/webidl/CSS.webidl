namespace CSS {
  [Throws]
  boolean supports(DOMString property, DOMString value);

  [Throws]
  boolean supports(DOMString conditionText);
};


partial namespace CSS {
  DOMString escape(DOMString ident);
};