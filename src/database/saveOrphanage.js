function saveOrphanage(db, orphanage) {
  return db.run(`
    INSERT INTO orphanages(
        lat,
        lng,
        name,
        about,
        wpp,
        images,
        instructions,
        hours,
        open_on_weekends
    ) VALUES (
        "${orphanage.lat}",
        "${orphanage.lng}",
        "${orphanage.name}",
        "${orphanage.about}",
        "${orphanage.wpp}",
        "${orphanage.images}",
        "${orphanage.instructions}",
        "${orphanage.hours}",
        "${orphanage.open_on_weekends}"
    );
`);
}

module.exports = saveOrphanage;
