function gramoPhone(band,album,song){
    let songDurationInSeconds = (album.length * band.length) * song.length / 2;
    let rotation = songDurationInSeconds / 2.5;
    
    console.log(`The plate was rotated ${Math.ceil(rotation)} times.`);
}
gramoPhone('Black Sabbath', 'Paranoid', 'War Pigs' );