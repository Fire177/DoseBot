//displays list of memes. in future should scan commands directory and display info for each programmatically/dynamically
exports.run = (client, message, args) => {
  console.log(
    `**********Displaying secretmemes on ${message.guild.name}**********`
  );
  message.channel
    .send(
      "```Available memes: \n --catgirl \n --cocoa \n --dong \n --deepgraham \n --frogmodai \n --geometry \n --graham \n --greentea \n --heart \n --josie \n --kaylee \n --kayleetriggered \n --catfeud \n --memes \n --math \n --shay \n --uwotm8 \n --sadgraham \n --zen```"
    )
    .catch(console.error);
};