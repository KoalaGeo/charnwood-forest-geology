var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_GBRBGS150kBedrock_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://map.bgs.ac.uk/arcgis/services/BGS_Detailed_Geology/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "BGS.50k.Bedrock",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "GBR BGS 1:50k Bedrock",
                            opacity: 0.400000,
                            
                            
                          });
              wms_layers.push([lyr_GBRBGS150kBedrock_1, 1]);
var lyr_GBRBGS150kLinearfeatures_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://map.bgs.ac.uk/arcgis/services/BGS_Detailed_Geology/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "BGS.50k.Linear.features",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "GBR BGS 1:50k Linear features",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_GBRBGS150kLinearfeatures_2, 1]);
var format_CharnwoodGeologyWalks_3 = new ol.format.GeoJSON();
var features_CharnwoodGeologyWalks_3 = format_CharnwoodGeologyWalks_3.readFeatures(json_CharnwoodGeologyWalks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CharnwoodGeologyWalks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CharnwoodGeologyWalks_3.addFeatures(features_CharnwoodGeologyWalks_3);
var lyr_CharnwoodGeologyWalks_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CharnwoodGeologyWalks_3, 
                style: style_CharnwoodGeologyWalks_3,
                interactive: true,
    title: 'Charnwood Geology Walks<br />\
    <img src="styles/legend/CharnwoodGeologyWalks_3_0.png" /> 1<br />\
    <img src="styles/legend/CharnwoodGeologyWalks_3_1.png" /> 2<br />\
    <img src="styles/legend/CharnwoodGeologyWalks_3_2.png" /> 3<br />\
    <img src="styles/legend/CharnwoodGeologyWalks_3_3.png" /> 4<br />\
    <img src="styles/legend/CharnwoodGeologyWalks_3_4.png" /> 5<br />\
    <img src="styles/legend/CharnwoodGeologyWalks_3_5.png" /> 6<br />\
    <img src="styles/legend/CharnwoodGeologyWalks_3_6.png" /> <br />'
        });
var format_poi_4 = new ol.format.GeoJSON();
var features_poi_4 = format_poi_4.readFeatures(json_poi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poi_4.addFeatures(features_poi_4);
var lyr_poi_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poi_4, 
                style: style_poi_4,
                interactive: true,
    title: 'poi<br />\
    <img src="styles/legend/poi_4_0.png" /> 1<br />\
    <img src="styles/legend/poi_4_1.png" /> 2<br />\
    <img src="styles/legend/poi_4_2.png" /> 3<br />\
    <img src="styles/legend/poi_4_3.png" /> 4<br />\
    <img src="styles/legend/poi_4_4.png" /> 5<br />\
    <img src="styles/legend/poi_4_5.png" /> 6<br />\
    <img src="styles/legend/poi_4_6.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_GBRBGS150kBedrock_1.setVisible(true);lyr_GBRBGS150kLinearfeatures_2.setVisible(true);lyr_CharnwoodGeologyWalks_3.setVisible(true);lyr_poi_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GBRBGS150kBedrock_1,lyr_GBRBGS150kLinearfeatures_2,lyr_CharnwoodGeologyWalks_3,lyr_poi_4];
lyr_CharnwoodGeologyWalks_3.set('fieldAliases', {'fid': 'fid', 'walk': 'walk', });
lyr_poi_4.set('fieldAliases', {'walk': 'walk', 'name': 'name', 'walkid': 'walkid', });
lyr_CharnwoodGeologyWalks_3.set('fieldImages', {'fid': 'TextEdit', 'walk': 'Range', });
lyr_poi_4.set('fieldImages', {'walk': 'TextEdit', 'name': 'TextEdit', 'walkid': 'TextEdit', });
lyr_CharnwoodGeologyWalks_3.set('fieldLabels', {'fid': 'no label', 'walk': 'header label', });
lyr_poi_4.set('fieldLabels', {'walk': 'no label', 'name': 'header label', 'walkid': 'header label', });
lyr_poi_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});