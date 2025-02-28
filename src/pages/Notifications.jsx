export default function Notifications() {
  const notifications = [
    {
      id: 1,
      message: "Your AC Repair booking is confirmed for March 1, 10:00 AM.",
      time: "2 hours ago",
    },
    {
      id: 2,
      message: "Spa appointment reminder: Tomorrow at 3:00 PM.",
      time: "1 day ago",
    },
  ];

  return (
    <div className="notifications-page">
      <h1>Notifications</h1>
      <ul className="notification-list">
        {notifications.map((notification) => (
          <li key={notification.id} className="notification-item">
            <p>{notification.message}</p>
            <small>{notification.time}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
