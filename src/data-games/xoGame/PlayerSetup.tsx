import React from 'react';
import { Player, gameCharacters } from './gameCharacters';
import PlayerSelector from './PlayerSelector';
import ToggleSwitch from '../../utils/ToggleSwitch/ToggleSwitch';

interface Props {
  selectedCharacters: (Player | null)[];
  updatePlayer: (index: number, player: Player) => void;
  botDifficulty: boolean;
  setBotDifficulty: (value: boolean) => void;
}

const PlayerSetup: React.FC<Props> = ({ selectedCharacters, updatePlayer, botDifficulty, setBotDifficulty }) => (
  <>
    <div className="player-setup-wrapper">
      <PlayerSelector
        playerNumber={1}
        selected={selectedCharacters[0]}
        otherSelectedName={selectedCharacters[1]?.name ?? null}
        allCharacters={gameCharacters}
        onChange={(player) => updatePlayer(0, player)}
      />
      <PlayerSelector
        playerNumber={2}
        selected={selectedCharacters[1]}
        otherSelectedName={selectedCharacters[0]?.name ?? null}
        allCharacters={gameCharacters}
        onChange={(player) => updatePlayer(1, player)}
      />
    </div>
    <div className="difficulty-bot-toggle">
      <ToggleSwitch checked={botDifficulty} onChange={(e) => setBotDifficulty(e.target.checked)} label="Умные боты" />
    </div>
  </>
);

export default PlayerSetup;
