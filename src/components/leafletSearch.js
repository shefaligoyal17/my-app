import L from 'leaflet';
import { createControlComponent } from '@react-leaflet/core';
import 'leaflet-search';
import 'leaflet-search/dist/leaflet-search.min.css';

const createLeafletSearch = ({ searchLayer }) => {

 const instance=new L.Control.Search({
		url: 'https://nominatim.openstreetmap.org/search?format=json&q={s}',
		jsonpParam: 'json_callback',
		propertyName: 'display_name',
		propertyLoc: ['lat','lon'],
		marker: L.circleMarker([0,0],{radius:20}),
		autoCollapse: true,
		autoType: false,
		minLength: 2
	});

  return instance;
};

const LeafletSearch = createControlComponent(createLeafletSearch);

export default LeafletSearch;