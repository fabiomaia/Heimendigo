const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('servidor')
		.setDescription('Retorna informações sobre o servidor atual.'),
	async execute(interaction) {
		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.reply(`Este é o servidor **${interaction.guild.name}** e possui **${interaction.guild.memberCount} membros**.`);
	},
};