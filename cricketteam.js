const ballsperover=6;
Class cricketteam
{
constructor(name,id,players[],totalscores,totalwickets,oversplayed)
{this.name=name;
 this.id=id;
 this.players[]=players; 
 this.totalscores=totalscores;
 this.totalwickets=totalwickets;
 this.oversplayed=oversplayed;
 }
 calcscore()
 {}
 getwickets()
 {}
 getoversplayed(noofclicks)
 { return (noofclicks/ballsperover);} //yet to be modified to get overs+balls(ex:14 balls,2 overs,2 balls)
 }