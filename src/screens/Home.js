"use strict";
import React, { Component } from "react";
import { Text, FlatList } from "react-native";
import { Container } from "../components/Container";
import { ListItem } from "../components/ListItem";

export default class Home extends Component {
  static navigationOptions = {
    title: "Deck Picker",
    headerStyle: {
      backgroundColor: "#226666"
    }
  };

  render() {
    return (
      <Container>
        <FlatList
          data={this.data}
          renderItem={({ item }) => <ListItem decks={item} />}
          keyExtractor={item => item.decklink}
        />
      </Container>
    );
  }

  data = [
    {
      cards: [
        {
          arena: 2,
          description:
            "Three fast, very weak melee fighters. Surround your enemies with this pile of bones!",
          elixir: 1,
          icon:
            "https://api-assets.clashroyale.com/cards/300/oO7iKMU5m0cdxhYPZA3nWQiAUh2yoGgdThLWB1rVSec.png",
          id: 26000010,
          key: "skeletons",
          maxLevel: 13,
          name: "Skeletons",
          rarity: "Common",
          type: "Troop"
        },
        {
          arena: 0,
          description:
            "Don't be fooled by her delicately coiffed hair, the Musketeer is a mean shot with her trusty boomstick.",
          elixir: 4,
          icon:
            "https://api-assets.clashroyale.com/cards/300/Tex1C48UTq9FKtAX-3tzG0FJmc9jzncUZG3bb5Vf-Ds.png",
          id: 26000014,
          key: "musketeer",
          maxLevel: 11,
          name: "Musketeer",
          rarity: "Rare",
          type: "Troop"
        },
        {
          arena: 4,
          description:
            'Fast melee troop that targets buildings and can jump over the river. He followed the echoing call of "Hog Riderrrrr" all the way through the Arena doors.',
          elixir: 4,
          icon:
            "https://api-assets.clashroyale.com/cards/300/Ubu0oUl8tZkusnkZf8Xv9Vno5IO29Y-jbZ4fhoNJ5oc.png",
          id: 26000021,
          key: "hog-rider",
          maxLevel: 11,
          name: "Hog Rider",
          rarity: "Rare",
          type: "Troop"
        },
        {
          arena: 8,
          description:
            "Spawns one lively little Ice Spirit to freeze a group of enemies. Stay frosty.",
          elixir: 1,
          icon:
            "https://api-assets.clashroyale.com/cards/300/lv1budiafU9XmSdrDkk0NYyqASAFYyZ06CPysXKZXlA.png",
          id: 26000030,
          key: "ice-spirit",
          maxLevel: 13,
          name: "Ice Spirit",
          rarity: "Common",
          type: "Troop"
        },
        {
          arena: 8,
          description:
            "He's tough, targets buildings and explodes when destroyed, slowing nearby enemies. Made entirely out of ice... or is he?! Yes.",
          elixir: 2,
          icon:
            "https://api-assets.clashroyale.com/cards/300/r05cmpwV1o7i7FHodtZwW3fmjbXCW34IJCsDEV5cZC4.png",
          id: 26000038,
          key: "ice-golem",
          maxLevel: 11,
          name: "Ice Golem",
          rarity: "Rare",
          type: "Troop"
        },
        {
          arena: 3,
          description:
            "Defensive building. Shoots cannonballs with deadly effect, but cannot target flying troops.",
          elixir: 3,
          icon:
            "https://api-assets.clashroyale.com/cards/300/nZK1y-beLxO5vnlyUhK6-2zH2NzXJwqykcosqQ1cmZ8.png",
          id: 27000000,
          key: "cannon",
          maxLevel: 13,
          name: "Cannon",
          rarity: "Common",
          type: "Building"
        },
        {
          arena: 0,
          description:
            "Annnnnd... Fireball. Incinerates a small area, dealing high damage. Reduced damage to Crown Towers.",
          elixir: 4,
          icon:
            "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png",
          id: 28000000,
          key: "fireball",
          maxLevel: 11,
          name: "Fireball",
          rarity: "Rare",
          type: "Spell"
        },
        {
          arena: 6,
          description:
            'A spilt bottle of Rage turned an innocent tree trunk into "The Log". Now, it seeks revenge by crushing anything in its path!',
          elixir: 2,
          icon:
            "https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png",
          id: 28000011,
          key: "the-log",
          maxLevel: 5,
          name: "The Log",
          rarity: "Legendary",
          type: "Spell"
        }
      ],
      decklink:
        "https://link.clashroyale.com/deck/en?deck=26000010;26000014;26000021;26000030;26000038;27000000;28000000;28000011",
      popularity: 10
    },
    {
      cards: [
        {
          arena: 0,
          description:
            "Slow but durable, only attacks buildings. A real one-man wrecking crew!",
          elixir: 5,
          icon:
            "https://api-assets.clashroyale.com/cards/300/Axr4ox5_b7edmLsoHxBX3vmgijAIibuF6RImTbqLlXE.png",
          id: 26000003,
          key: "giant",
          maxLevel: 11,
          name: "Giant",
          rarity: "Rare",
          type: "Troop"
        },
        {
          arena: 4,
          description:
            "Six fast, unarmored flying attackers. Three's a crowd, six is a horde!",
          elixir: 5,
          icon:
            "https://api-assets.clashroyale.com/cards/300/Wyjq5l0IXHTkX9Rmpap6HaH08MvjbxFp1xBO9a47YSI.png",
          id: 26000022,
          key: "minion-horde",
          maxLevel: 13,
          name: "Minion Horde",
          rarity: "Common",
          type: "Troop"
        },
        {
          arena: 7,
          description:
            "Trio of powerful, independent markswomen, fighting for justice and honor. Disrespecting them would not be just a mistake, it would be a cardinal sin!",
          elixir: 9,
          icon:
            "https://api-assets.clashroyale.com/cards/300/_J2GhbkX3vswaFk1wG-dopwiHyNc_YiPhwroiKF3Mek.png",
          id: 26000028,
          key: "three-musketeers",
          maxLevel: 11,
          name: "Three Musketeers",
          rarity: "Rare",
          type: "Troop"
        },
        {
          arena: 6,
          description:
            "Two Barbarians holding a big log charge at the nearest building, dealing significant damage if they connect; then they go to town with their swords!",
          elixir: 4,
          icon:
            "https://api-assets.clashroyale.com/cards/300/dyc50V2cplKi4H7pq1B3I36pl_sEH5DQrNHboS_dbbM.png",
          id: 26000036,
          key: "battle-ram",
          maxLevel: 11,
          name: "Battle Ram",
          rarity: "Rare",
          type: "Troop"
        },
        {
          arena: 9,
          description:
            "Spawns five Goblins - three with knives, two with spears - at a discounted Elixir cost. It's like a Goblin Value Pack!",
          elixir: 3,
          icon:
            "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png",
          id: 26000041,
          key: "goblin-gang",
          maxLevel: 13,
          name: "Goblin Gang",
          rarity: "Common",
          type: "Troop"
        },
        {
          arena: 8,
          description:
            "Spawns a handful of tiny flying creatures. Think of them as sweet, purple... balls of DESTRUCTION!",
          elixir: 2,
          icon:
            "https://api-assets.clashroyale.com/cards/300/EnIcvO21hxiNpoI-zO6MDjLmzwPbq8Z4JPo2OKoVUjU.png",
          id: 26000049,
          key: "bats",
          maxLevel: 13,
          name: "Bats",
          rarity: "Common",
          type: "Troop"
        },
        {
          arena: 6,
          description: "You gotta spend Elixir to make Elixir.",
          elixir: 6,
          icon:
            "https://api-assets.clashroyale.com/cards/300/BGLo3Grsp81c72EpxLLk-Sofk3VY56zahnUNOv3JcT0.png",
          id: 27000007,
          key: "elixir-collector",
          maxLevel: 11,
          name: "Elixir Collector",
          rarity: "Rare",
          type: "Building"
        },
        {
          arena: 5,
          description:
            "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers.",
          elixir: 2,
          icon:
            "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png",
          id: 28000008,
          key: "zap",
          maxLevel: 13,
          name: "Zap",
          rarity: "Common",
          type: "Spell"
        }
      ],
      decklink:
        "https://link.clashroyale.com/deck/en?deck=26000003;26000022;26000028;26000036;26000041;26000049;27000007;28000008",
      popularity: 8
    },
    {
      cards: [
        {
          arena: 4,
          description:
            "Six fast, unarmored flying attackers. Three's a crowd, six is a horde!",
          elixir: 5,
          icon:
            "https://api-assets.clashroyale.com/cards/300/Wyjq5l0IXHTkX9Rmpap6HaH08MvjbxFp1xBO9a47YSI.png",
          id: 26000022,
          key: "minion-horde",
          maxLevel: 13,
          name: "Minion Horde",
          rarity: "Common",
          type: "Troop"
        },
        {
          arena: 7,
          description:
            "Trio of powerful, independent markswomen, fighting for justice and honor. Disrespecting them would not be just a mistake, it would be a cardinal sin!",
          elixir: 9,
          icon:
            "https://api-assets.clashroyale.com/cards/300/_J2GhbkX3vswaFk1wG-dopwiHyNc_YiPhwroiKF3Mek.png",
          id: 26000028,
          key: "three-musketeers",
          maxLevel: 11,
          name: "Three Musketeers",
          rarity: "Rare",
          type: "Troop"
        },
        {
          arena: 6,
          description:
            "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel.",
          elixir: 3,
          icon:
            "https://api-assets.clashroyale.com/cards/300/Y4yWvdwBCg2FpAZgs8T09Gy34WOwpLZW-ttL52Ae8NE.png",
          id: 26000032,
          key: "miner",
          maxLevel: 5,
          name: "Miner",
          rarity: "Legendary",
          type: "Troop"
        },
        {
          arena: 6,
          description:
            "Two Barbarians holding a big log charge at the nearest building, dealing significant damage if they connect; then they go to town with their swords!",
          elixir: 4,
          icon:
            "https://api-assets.clashroyale.com/cards/300/dyc50V2cplKi4H7pq1B3I36pl_sEH5DQrNHboS_dbbM.png",
          id: 26000036,
          key: "battle-ram",
          maxLevel: 11,
          name: "Battle Ram",
          rarity: "Rare",
          type: "Troop"
        },
        {
          arena: 8,
          description:
            "He's tough, targets buildings and explodes when destroyed, slowing nearby enemies. Made entirely out of ice... or is he?! Yes.",
          elixir: 2,
          icon:
            "https://api-assets.clashroyale.com/cards/300/r05cmpwV1o7i7FHodtZwW3fmjbXCW34IJCsDEV5cZC4.png",
          id: 26000038,
          key: "ice-golem",
          maxLevel: 11,
          name: "Ice Golem",
          rarity: "Rare",
          type: "Troop"
        },
        {
          arena: 9,
          description:
            "Spawns five Goblins - three with knives, two with spears - at a discounted Elixir cost. It's like a Goblin Value Pack!",
          elixir: 3,
          icon:
            "https://api-assets.clashroyale.com/cards/300/NHflxzVAQT4oAz7eDfdueqpictb5vrWezn1nuqFhE4w.png",
          id: 26000041,
          key: "goblin-gang",
          maxLevel: 13,
          name: "Goblin Gang",
          rarity: "Common",
          type: "Troop"
        },
        {
          arena: 6,
          description: "You gotta spend Elixir to make Elixir.",
          elixir: 6,
          icon:
            "https://api-assets.clashroyale.com/cards/300/BGLo3Grsp81c72EpxLLk-Sofk3VY56zahnUNOv3JcT0.png",
          id: 27000007,
          key: "elixir-collector",
          maxLevel: 11,
          name: "Elixir Collector",
          rarity: "Rare",
          type: "Building"
        },
        {
          arena: 5,
          description:
            "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers.",
          elixir: 2,
          icon:
            "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png",
          id: 28000008,
          key: "zap",
          maxLevel: 13,
          name: "Zap",
          rarity: "Common",
          type: "Spell"
        }
      ],
      decklink:
        "https://link.clashroyale.com/deck/en?deck=26000022;26000028;26000032;26000036;26000038;26000041;27000007;28000008",
      popularity: 7
    },
    {
      cards: [
        {
          arena: 2,
          description:
            "Three fast, unarmored flying attackers. Roses are red, minions are blue, they can fly, and will crush you!",
          elixir: 3,
          icon:
            "https://api-assets.clashroyale.com/cards/300/yHGpoEnmUWPGV_hBbhn-Kk-Bs838OjGzWzJJlQpQKQA.png",
          id: 26000005,
          key: "minions",
          maxLevel: 13,
          name: "Minions",
          rarity: "Common",
          type: "Troop"
        },
        {
          arena: 2,
          description:
            "As pretty as they are, you won't want a parade of THESE balloons showing up on the horizon. Drops powerful bombs and when shot down, crashes dealing area damage.",
          elixir: 5,
          icon:
            "https://api-assets.clashroyale.com/cards/300/qBipxLo-3hhCnPrApp2Nn3b2NgrSrvwzWytvREev0CY.png",
          id: 26000006,
          key: "balloon",
          maxLevel: 8,
          name: "Balloon",
          rarity: "Epic",
          type: "Troop"
        },
        {
          arena: 7,
          description:
            "Three ruthless bone brothers with shields. Knock off their shields and all that's left are three ruthless bone brothers.",
          elixir: 3,
          icon:
            "https://api-assets.clashroyale.com/cards/300/1ArKfLJxYo6_NU_S9cAeIrfbXqWH0oULVJXedxBXQlU.png",
          id: 26000025,
          key: "guards",
          maxLevel: 8,
          name: "Guards",
          rarity: "Epic",
          type: "Troop"
        },
        {
          arena: 4,
          description:
            "The Lava Hound is a majestic flying beast that attacks buildings. The Lava Pups are less majestic angry babies that attack anything.",
          elixir: 7,
          icon:
            "https://api-assets.clashroyale.com/cards/300/unicRQ975sBY2oLtfgZbAI56ZvaWz7azj-vXTLxc0r8.png",
          id: 26000029,
          key: "lava-hound",
          maxLevel: 5,
          name: "Lava Hound",
          rarity: "Legendary",
          type: "Troop"
        },
        {
          arena: 7,
          description:
            "Flying, armored and powerful. What could be its weakness?! Cupcakes.",
          elixir: 3,
          icon:
            "https://api-assets.clashroyale.com/cards/300/-T_e4YLbuhPBKbYnBwQfXgynNpp5eOIN_0RracYwL9c.png",
          id: 26000039,
          key: "mega-minion",
          maxLevel: 11,
          name: "Mega Minion",
          rarity: "Rare",
          type: "Troop"
        },
        {
          arena: 2,
          description:
            "Troop building that periodically deploys Skeletons to fight the enemy. When destroyed, spawns 4 Skeletons. Creepy!",
          elixir: 3,
          icon:
            "https://api-assets.clashroyale.com/cards/300/LjSfSbwQfkZuRJY4pVxKspZ-a0iM5KAhU8w-a_N5Z7Y.png",
          id: 27000009,
          key: "tombstone",
          maxLevel: 11,
          name: "Tombstone",
          rarity: "Rare",
          type: "Building"
        },
        {
          arena: 0,
          description:
            "Annnnnd... Fireball. Incinerates a small area, dealing high damage. Reduced damage to Crown Towers.",
          elixir: 4,
          icon:
            "https://api-assets.clashroyale.com/cards/300/lZD9MILQv7O-P3XBr_xOLS5idwuz3_7Ws9G60U36yhc.png",
          id: 28000000,
          key: "fireball",
          maxLevel: 11,
          name: "Fireball",
          rarity: "Rare",
          type: "Spell"
        },
        {
          arena: 5,
          description:
            "Zaps enemies, briefly stunning them and dealing damage inside a small radius. Reduced damage to Crown Towers.",
          elixir: 2,
          icon:
            "https://api-assets.clashroyale.com/cards/300/7dxh2-yCBy1x44GrBaL29vjqnEEeJXHEAlsi5g6D1eY.png",
          id: 28000008,
          key: "zap",
          maxLevel: 13,
          name: "Zap",
          rarity: "Common",
          type: "Spell"
        }
      ],
      decklink:
        "https://link.clashroyale.com/deck/en?deck=26000005;26000006;26000025;26000029;26000039;27000009;28000000;28000008",
      popularity: 7
    }
  ];
}
