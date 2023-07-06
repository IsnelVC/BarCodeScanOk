import React, { useState } from 'react';
import { View, FlatList, Button , Text} from 'react-native';
import ScanComponent from '../app/components/ScanComponent.js';

const Index = () => {
  const [showScanComponent, setShowScanComponent] = useState(false);
  const [scannedItems, setScannedItems] = useState([]);

  const handleOpenScanComponent = () => {
    setShowScanComponent(true);
  };

  const handleCloseScanComponent = () => {
    setShowScanComponent(false);
  };

  const handleScannedItem = (item) => {
    setScannedItems((prevItems) => [...prevItems, item]);
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title={'Open Scan Component'} onPress={handleOpenScanComponent} />
      {showScanComponent && (
        <ScanComponent onClose={handleCloseScanComponent} onScannedItem={handleScannedItem} />
      )}
      <FlatList
        data={scannedItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text>Value: {item.value} -- Type: {item.type} -- Time: {item.time}</Text>
      
          </View>
        )}
      />
    </View>
  );
};

export default Index;
