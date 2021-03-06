import {CheckCircle, Lock} from 'phosphor-react';
import{format, isPast} from 'date-fns'
import ptbr from 'date-fns/locale/pt-BR'
import { Link } from 'react-router-dom';

interface LessonProps{
    title:string,
    slug:string,
    availableAt:Date,
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps){

    const isLessonAvailable =  isPast(props.availableAt)
    const availableDateFormat = format(props.availableAt,"EEEE' • ' d' de ' MMM' • 'k'h'mm ",{locale:ptbr})
    return(
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-gray-300">
            {availableDateFormat}
            </span>
            <div className="rounded border border-gray-500 p-4 mt-2">
                <header className="flex items-center justify-between">
                    {
                        isLessonAvailable?(
                            <span className=" flex items-center gap-2 text-sm text-blue-500 font-medium">
                                <CheckCircle size={30}/>
                                Conteudo Liberado
                            </span>
                        ):(
                            <span className=" flex items-center gap-2 text-sm text-orange-500 font-medium">
                                <Lock size={30}/>
                                 Em breve
                            </span>
                        )
                    }
                    <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
                        {props.type==='live'? 'AO VIVO': "AULA PRATICA"}
                    </span>
                </header>
                <strong className="text-gray-200 mt-5 block">
                   {props.title}
                </strong>
            </div>
       </Link>
    )
}