async function main() {

	const [deployer] = await ethers.getSigners();

	console.log(
	"Deploying contracts with the account:",
	deployer.address
	);

	console.log("Account balance:", (await deployer.getBalance()).toString());

	const FLYgonTicket = await ethers.getContractFactory("FLYgonTicket");
	const contract = await FLYgonTicket.deploy("ipfs://QmeLeca26F14oNZDuJruckJcdqJbgR6RwNVDUTzThXG5FY");

	console.log("Contract deployed at:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
	console.error(error);
	process.exit(1);
  });