module.exports = async (page, scenario, vp) => {
    await require('./clearCookies')(page, scenario);
    await require('./getSession')(page, scenario);
    await require('./previouslySignedInWithIdp')(page, scenario);
    await require('./documentSelectionHelper')(page, scenario);
};
