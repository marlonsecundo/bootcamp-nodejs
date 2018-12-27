const { Ad, User } = require('../models');
const Mail = require('../services/Mail');

class PurchaseController {
  async store(req, res) {
    const { ad, content } = req.body;

    const purchaseAd = await Ad.findById(ad).populate('author');
    const user = await User.findById(req.userId);

    await Mail.sendMail({
      from: '"Diego Fernandes" <diego@email.com>',
      to: purchaseAd.author.email,
      subject: `Solicitação de compra ${purchaseAd.title}`,
      template: 'purchase',
      context: { user, content, ad: purchaseAd },
    });

    return res.send();
  }
}

module.exports = new PurchaseController();
