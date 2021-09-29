//Spalten Einträge 
export const columns = [
  {
   name: "name",
   label: "Name",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
   name: "company",
   label: "Company",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
   name: "city",
   label: "City",
   options: {
    filter: true,
    sort: false,
   }
  },
  {
   name: "state",
   label: "State",
   options: {
    filter: true,
    sort: false,
   }
  },
 ];

 // User Daten -> 
export const data = [
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
   ];
   
   //Tabellen Optionen
   export const options = {
     filterType: 'checkbox',
     rowsPerPage: 7,
   };