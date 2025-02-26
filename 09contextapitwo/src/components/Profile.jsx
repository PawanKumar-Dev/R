import useTheme from "../context/ThemeContext";

const Profile = () => {
  const { themeMode } = useTheme();

  return (
    <div className={themeMode}>
      <h1>Profile Data</h1>
      <p>Just some dummy data</p>
    </div>
  );
};

export default Profile;
