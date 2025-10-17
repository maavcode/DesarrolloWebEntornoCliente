export default function getPriorityColor(priority){
        switch(priority){
            case "Alta":
                return "#ff1100";
            case "Media":
                return "#ffdd00";
            case "Baja":
                return "#26ff00";
            default:
                return "#ccc";
        }
    }