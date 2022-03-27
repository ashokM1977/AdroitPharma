var ob={

	name:"sumit",
	rollNo:21,
	age: 22,
	displayName: function (n){
		var name=n;
		console.log(`inner name value is ${name}`);
		console.log(`outer objedt name value is ${this.name}`);
	}
}
ob.displayName("jethiaa")
var v=["heel","dg",34,55];

 v.forEach(s=>(console.log(s)) );