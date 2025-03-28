
import React, { useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState([
    { from: "thay", text: "Chào con! Hôm nay mình học Toán hay Tiếng Anh nào?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { from: "con", text: input }];
    setMessages(newMessages);
    setInput("");

    setTimeout(() => {
      const lower = input.toLowerCase();
      let reply = "Thầy đang nghe đây, con muốn hỏi gì nào?";
      if (lower.includes("toán")) {
        reply = "Con thử nghĩ xem nên áp dụng công thức nào nhé? Thầy gợi ý: ax + b = c ⇒ x = (c - b)/a";
      } else if (lower.includes("english") || lower.includes("tiếng anh")) {
        reply = "Let's practice! Can you translate this sentence: 'I go to school every day'?";
      } else if (lower.includes("chưa biết") || lower.includes("khó quá")) {
        reply = "Không sao đâu con, mình cùng phân tích từng bước một nhé. Trước tiên, con xác định đề bài yêu cầu gì nào?";
      }
      setMessages((prev) => [...prev, { from: "thay", text: reply }]);
    }, 500);
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 16 }}>
      <div style={{ border: '1px solid #ccc', padding: 16, height: 400, overflowY: 'scroll' }}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            textAlign: msg.from === 'thay' ? 'left' : 'right',
            margin: '8px 0',
            background: msg.from === 'thay' ? '#e0f0ff' : '#d4f8d4',
            padding: '8px 12px',
            borderRadius: 10
          }}>
            <strong>{msg.from === 'thay' ? 'Thầy' : 'Con'}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', marginTop: 16 }}>
        <input
          style={{ flex: 1, padding: 8 }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nhập câu hỏi của con..."
        />
        <button onClick={handleSend} style={{ marginLeft: 8, padding: '8px 16px' }}>Gửi</button>
      </div>
    </div>
  );
}
