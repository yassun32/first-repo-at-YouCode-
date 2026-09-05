const total = 5;
var totalv = 5;
for (let i = 1 ; i <= total; i++ )
{
	let ligne = "";
	for (let j = 1; j <= totalv ;j++)
	{
		ligne += j;
	}
	console.log(ligne);
	totalv--;
}
