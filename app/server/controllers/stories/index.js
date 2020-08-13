const stories = require('../../data/latest-stories.json');

module.exports = {
  async getTimeStories(req, res) {
    try {
      return await res.status(200).json(stories);
    } catch (err) {
      return await res.status(500).json({ msg: 'Something than wrong' });
    }
  },
};
