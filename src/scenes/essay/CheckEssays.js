import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Essay} from "./Essay";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
            // style={{
            //     width: '90%',
            // }}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

// function a11yProps(index) {
//     return {
//         id: `vertical-tab-${index}`,
//         'aria-controls': `vertical-tabpanel-${index}`,
//     };
// }

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 'auto',
        width: 1000,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    tabs: {
        width: '20%',
        borderRight: `1px solid ${theme.palette.divider}`,
    },

    body: {
        width: '80%',
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export const CheckEssays = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Завьялов Гордей" />
                <Tab label="Хрущев Вячеслав" />
                <Tab label="Карпеев Федор"  />
                <Tab label="Ромашов Федор" />
                <Tab label="Сотников Даниил" />
                <Tab label="Item Six2" />
                <Tab label="Item Seven2"    />
            </Tabs>

            <TabPanel
                value={value}
                index = {0}
                className = {classes.body}
            >
                <Essay
                    titleLesson={"Урок"}
                    topicEssay={"Война и мир"}
                    textEssay={"В противоположность Кутузову, в то же время, в событии еще более важнейшем, чем отступление армии без боя, в оставлении Москвы и сожжении ее, Растопчин, представляющийся нам руководителем этого события, действовал совершенно иначе.\n" +
                    "Событие это — оставление Москвы и сожжение ее — было так же неизбежно, как и отступление войск без боя за Москву после Бородинского сражения. Каждый русский человек, не на основании умозаключений, а на основании того чувства, которое лежит в нас и лежало в наших отцах, мог бы предсказать то, что совершилось.\n" +
                    "Начиная от Смоленска, во всех городах и деревнях русской земли, без участия графа Растопчина и его афиш, происходило то же самое, что произошло в Москве. Народ с беспечностью ждал неприятеля, не бунтовал, не волновался, никого не раздирал на куски, а спокойно ждал своей судьбы, чувствуя в себе силы в самую трудную минуту найти то, что должно было сделать. И как только неприятель подходил, богатейшие элементы населения уходили, оставляя свое имущество; беднейшие оставались и зажигали и истребляли то, что оставалось.\n" +
                    "Сознание того, что это так будет, и всегда так будет, лежало и лежит в душе русского человека. И сознание это и, более того, предчувствие того, что Москва будет взята, лежало в русском московском обществе 12-го года. Те, которые стали выезжать из Москвы еще в июле и начале августа, показали, что они ждали этого. Те, которые выезжали с тем, что они могли захватить, оставляя дома и половину имущества, действовали так вследствие того скрытого (latent) патриотизма, который выражается не фразами, не убийством детей для спасения отечества и т. п. неестественными действиями, а который выражается незаметно, просто, органически и потому производит всегда самые сильные результаты."}
                    commentEssay={"dsldkjs"}
                />

                {/*dsd*/}
            </TabPanel>
            {/*<TabPanel value={value} index={0}>*/}
            {/*    Item One*/}
            {/*</TabPanel>*/}
            {/*<TabPanel value={value} index={1}>*/}
            {/*    Item Two*/}
            {/*</TabPanel>*/}
            {/*<TabPanel value={value} index={2}>*/}
            {/*    Item Three*/}
            {/*</TabPanel>*/}
            {/*<TabPanel value={value} index={3}>*/}
            {/*    Item Four*/}
            {/*</TabPanel>*/}
            {/*<TabPanel value={value} index={4}>*/}
            {/*    Item Five*/}
            {/*</TabPanel>*/}
            {/*<TabPanel value={value} index={5}>*/}
            {/*    Item Six*/}
            {/*</TabPanel>*/}
            {/*<TabPanel value={value} index={6}>*/}
            {/*    Item Seven*/}
            {/*</TabPanel>*/}
        </div>
    );
}
