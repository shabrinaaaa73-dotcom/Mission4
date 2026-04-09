import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const MagicDashboard = () => {

  const [isStarted, setIsStarted] = useState(false);
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState('#F0F8FF');


  const changeColor = () => {
    const colors = ['#FFB6C1', '#FFE4E1', '#E0FFFF', '#FFFACD', '#E6E6FA', '#F0FFF0'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  const increment = () => {
    if (count < 37) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  
  const goBack = () => {
    setIsStarted(false); 
    setCount(0); 
    
  };


  if (!isStarted) {
    return (
      <View style={[styles.container, { backgroundColor: '#f0d3df' }]}>
        <Text style={styles.title}>Aloo Weee! 👋</Text>
        <Text style={styles.subtitle}>Salken Yachh, nama kamu siapaa?</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Ketik namamu di sini..."
          value={name}
          onChangeText={(text) => setName(text)}
        />
        
        <TouchableOpacity
          style={[
            styles.button, 
            styles.mainButton, 
            name.trim() === '' && styles.disabledButton
          ]}
          onPress={() => setIsStarted(true)}
          disabled={name.trim() === ''}
        >
          <Text style={styles.mainButtonText}>Cak Klen mainkan dulu! 🚀</Text>
        </TouchableOpacity>
      </View>
    );
  }


  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.title}>✨ The Magic Dashboard ✨</Text>
      
      <Text style={styles.subtitle}>ALOO, {name}! Selamat datang di area bermainmu.</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Counter Ajaib 🔢</Text>
        <Text style={styles.counterText}>{count}</Text>
        
        <View style={styles.buttonRow}>
          <TouchableOpacity 
            style={[styles.button, styles.actionButton]} 
            onPress={decrement}
          >
            <Text style={styles.buttonText}>➖ Kurangi</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[
              styles.button, 
              count >= 37 ? styles.disabledActionButton : styles.actionButton
            ]} 
            onPress={increment}
            disabled={count >= 37}
          >
            <Text style={styles.buttonText}>➕ Tambah</Text>
          </TouchableOpacity>
        </View>

        {count === 0 && <Text style={styles.warning}>*Angka mentok di 0, gak bisa minus ya!</Text>}

        {count >= 37 && (
          <View style={styles.winBox}>
            <Text style={styles.winTitle}>Menang Bah! 🎉</Text>
            <Text style={styles.winDesc}>Paten kali bisa sampai 37 kali</Text>
          </View>
        )}
      </View>

      <TouchableOpacity style={[styles.button, styles.colorButton]} onPress={changeColor}>
        <Text style={styles.colorButtonText}>🎨 Ganti Warna Background!</Text>
      </TouchableOpacity>

      {/* --- TOMBOL KEMBALI KE AWAL --- */}
      <TouchableOpacity style={[styles.button, styles.backButton]} onPress={goBack}>
        <Text style={styles.backButtonText}>🔙 Kembali ke Awal</Text>
      </TouchableOpacity>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: { fontSize: 32, color: '#333', marginVertical: 10, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { fontSize: 18, color: '#555', marginBottom: 20, textAlign: 'center' },
  input: {
    padding: 15, fontSize: 18, borderRadius: 10,
    borderColor: '#ffb6c1', borderWidth: 2, width: '80%',
    backgroundColor: 'white', textAlign: 'center', marginBottom: 20
  },
  button: {
    paddingVertical: 12, paddingHorizontal: 25, borderRadius: 25,
    margin: 10, alignItems: 'center', justifyContent: 'center',
    elevation: 3,
  },
  mainButton: { backgroundColor: '#FF69B4', marginTop: 20 },
  disabledButton: { backgroundColor: '#ffc0cb' },
  mainButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  actionButton: { backgroundColor: '#87CEFA' },
  disabledActionButton: { backgroundColor: '#ccc' },
  buttonText: { color: '#333', fontWeight: 'bold', fontSize: 16 },
  colorButton: { backgroundColor: '#98FB98', marginTop: 30 },
  colorButtonText: { color: '#333', fontWeight: 'bold', fontSize: 16 },
  
  // Style untuk tombol kembali
  backButton: { backgroundColor: '#FF6347', marginTop: 5 }, 
  backButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },

  buttonRow: { flexDirection: 'row', justifyContent: 'center', width: '100%' },
  card: {
    backgroundColor: 'white', padding: 30, borderRadius: 20,
    elevation: 8, marginTop: 20, alignItems: 'center', width: '95%'
  },
  cardTitle: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  counterText: { fontSize: 60, marginVertical: 20, color: '#FF4500', fontWeight: 'bold' },
  warning: { color: 'red', fontSize: 14, marginTop: 10, textAlign: 'center' },
  winBox: {
    marginTop: 20, padding: 15, backgroundColor: '#FFD700', borderRadius: 15,
    borderColor: '#FF8C00', borderWidth: 3, borderStyle: 'dashed', alignItems: 'center'
  },
  winTitle: { color: '#D2691E', fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  winDesc: { color: '#D2691E', textAlign: 'center' }
});

export default MagicDashboard;