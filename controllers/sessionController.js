const db = require('../models/db');

exports.createSession = async (req, res) => {
  const { username, sessionType, gender, saveSession, duration, price } = req.body;

  try {
    const [result] = await db.execute(
      `INSERT INTO sessions (username, session_type, gender, save_session, duration, price) VALUES (?, ?, ?, ?, ?, ?)`,
      [username, sessionType, gender, saveSession, duration, price]
    );
    res.status(201).json({ message: 'تم تسجيل الجلسة بنجاح', sessionId: result.insertId });
  } catch (error) {
    console.error('Database Error:', error);
    res.status(500).json({ error: 'حدث خطأ أثناء الحفظ في قاعدة البيانات' });
  }
};

exports.getAllSessions = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM sessions ORDER BY created_at DESC');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'فشل في جلب الجلسات' });
  }
};
