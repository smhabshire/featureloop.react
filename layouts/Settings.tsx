const SettingsLayout = (page) => {
  return (
    <div className="flex flex-col grow">
      <h1 className="font-bold text-4xl mb-4">Settings</h1>

      <div className="flex flex-row w-full space-x-6">
        <div className="w-2/12">
          <MenuItem title={'General Settings'} settings={generalSettings} />

          <MenuItem title={'Other Settings'} settings={otherSettings} />
        </div>

        <div className="w-10/12 grow">{page}</div>
      </div>
    </div>
  );
};

export default SettingsLayout;
