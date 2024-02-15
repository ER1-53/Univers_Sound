import React, { FunctionComponent, useState, useEffect } from "react";
import SONGS from "../../../models/mock-song";
import SongCover from "./coverBox/song-cover";
import Song from "../../../models/song";
import styles from './songList.module.css'

const SongListHistoric: FunctionComponent = () => {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    setSongs(SONGS);
  }, []);

  const lastSongs = songs.slice(Math.max(songs.length - 10, 0));

  return (
    <section className={styles.selection}>
      <header className={styles.titleBox}><h3>Your Sound</h3></header>
      <nav className={styles.nav_sounds_selection}>
        {lastSongs.map(song => (
                <SongCover key={song.id} song={song}/>
            ))}
      </nav>
    </section>
  );
}

export default SongListHistoric;
