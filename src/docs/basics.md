# Heroes of the Storm replay files
HotS replay files are a collection of only the essential events that occurred during a game.

To give you a more clear example, when a regular video game "saves" the save file usually looks something like this:

- Character Name: Link
- Class: Warrior
- Health Points: 1200
- Location: Hyrule
- Weapon: Master Sword
- ...etc...

When the game loads this save file, it reads the game state from the save file directly in to the game. It instantly knows exactly who you are. 

However, a Heroes of the Storm replay file is more complex. In order to play back a game for you to watch, it must save all the events that happened in the game so it's history can accurately be recreated. An "event" can be as simple as message, ability use, attack command, or even a simple mouse click. So a heroes of the storm replay file usually looks something like this:

- KaelThas used the FlameStrike ability underneath the opposing hero Garrosh
- The opposing team member Garrosh received 100 damage from flamestrike
- The opposing team member Nova received 100 damage from flamestrike
- Abathur added the symbioate hat to his team's butcher 
- The opposing team member Nova walked within tower range and has been revealed
- Butcher used the Charge ability targeting Nova

HotS replay files are a stream of unique events that allow the game engine to recreate the game as it happened.

## How it technically works
Heroes of the Storm saves .StormReplay files after every game you play. 

By default these files are stored at:

On windows: C:\Users\[Your Name]\Documents\Heroes of the Storm\Accounts\[Account Number]\[Hero ID]\Replays

On Mac: /User/[Your Name]/Blizzard/Heroes of the Storm/Accounts/[Account Number]/[Hero ID]/Replays

[Your Name] is the username you use to login to your computer. [Account Number] is the number Blizzard assigns to your Battle.net account. 
[Hero ID] is a unique string 


The .StormReplay files contain all the game events necessary to watch a completed game. Because of the sheer number of events that need to be recorded in order to play back a game, Blizzard has devised a proprietary file format that compresses and encodes these events in binary. Blizzard has used this archive format in every game they've released dating back to Diablo 1. Luckily, a bunch of people smarter than me have reverse engineered this file format and we can easily access it's contents. 

## The decoder

![Always drink your ovaltine](https://i.imgur.com/jvnneLX.gif)

Opening the MPQ archive is just the first part: once the replay file is opened, it must be decoded from a binary format into something that makes sense of the events and information it contains. Luckily, Blizzard has thrown us a bone here: Blizzard open sourced their Heroes of the Storm StormReplay file protocol decoder so we can understand the information within it. You can find it at: https://github.com/Blizzard/heroprotocol

Take a look at [File Formats & Tools]() to learn about other tools that can be used on StormReplay files. 
