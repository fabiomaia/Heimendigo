const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('usuario')
		.setDescription('Retorna informações do usuário.'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		await interaction.reply(`Estes comando foi executado por **${interaction.user.username}**, que ingressou neste servidor em **${interaction.member.joinedAt}**.`);
	},
};