const GREETING = 'Página de Allisson Gualpa';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
