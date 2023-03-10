import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";

export default function MemuNotification({ dropNotif, detailNotif }) {
  const NotifAllMap = detailNotif.map((notifItem) => (
    <NotificationItem
      key={notifItem.id}
      nbdec={notifItem.nbdec}
      title={notifItem.title}
      lastname={notifItem.lastname}
      firstname={notifItem.firstname}
      image={notifItem.image}
      nbauth={notifItem.nbauth}
    />
  ));

  return (
    <div className="menuNotif" style={{ display: dropNotif ? "none" : "flex" }}>
      {NotifAllMap}
    </div>
  );
}

MemuNotification.propTypes = {
  detailNotif: PropTypes.string.isRequired,
  map: PropTypes.func.isRequired,
  dropNotif: PropTypes.string.isRequired,
};
