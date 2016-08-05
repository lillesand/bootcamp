/*
    Oppgave

    Forbedre formateringen og navngivingen i denne fila.

*/

 package main;

public class Ansatt {

   private String fornavnString;
   private String etternavnString;
   private String ssnNumber;
   private int mob;
    public Ansatt(String ssn, String fornavn,String etternavn) {
        this.ssnNumber = ssn;
        this.fornavnString=fornavn;
        this.etternavnString = etternavn;
    }
    public String ansattnavn() {
        return this.fornavnString+" "+this.etternavnString;
    }
    public void setMob(int mob) {
        this.mob = mob;
    }
}