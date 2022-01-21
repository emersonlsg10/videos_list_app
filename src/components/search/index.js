/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

const INITIAL_PAGE = 1;

const SearchComponent = ({
  handleSearch,
  handleCancel,
  value = '',
  placeholder,
}) => {
  const [search, setSearch] = useState(() => {
    return value && value !== '' ? value : '';
  });

  useEffect(() => {
    setSearch(value);
  }, [value]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleSearch(search, INITIAL_PAGE);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.icon_content}
          onPress={() => {
            if (typeof search === 'string') {
              handleSearch(search);
            }
          }}>
          <>
            <Icon name="md-search-sharp" size={22} color={'#fff'} />
          </>
        </TouchableOpacity>
        <Searchbar
          clearIcon={() => <></>}
          value={search}
          inputStyle={styles.font_style}
          onChangeText={txt => {
            if (typeof txt === 'string') {
              setSearch(txt);
            }
          }}
          placeholder={placeholder ? placeholder : 'Busque por filmes'}
          style={styles.input}
        />
        {search !== '' && search && (
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => {
              handleCancel();
              setSearch('');
            }}>
            <Text style={styles.cancelText}>Cancelar</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SearchComponent;
