﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Prilozhenie
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Шлагбаум.
    /// </summary>
    // *** Start programmer edit section *** (Шлагбаум CustomAttributes)

    // *** End programmer edit section *** (Шлагбаум CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ШлагбаумE", new string[] {
            "Адрес as \'Адрес\'",
            "Положение as \'Положение\'"})]
    [View("ШлагбаумL", new string[] {
            "Адрес as \'Адрес\'",
            "Положение as \'Положение\'"})]
    public class Шлагбаум : ICSSoft.STORMNET.DataObject
    {
        
        private string fАдрес;
        
        private IIS.Prilozhenie.Положения fПоложение;
        
        private IIS.Prilozhenie.Паркомат fПаркомат;
        
        // *** Start programmer edit section *** (Шлагбаум CustomMembers)

        // *** End programmer edit section *** (Шлагбаум CustomMembers)

        
        /// <summary>
        /// Адрес.
        /// </summary>
        // *** Start programmer edit section *** (Шлагбаум.Адрес CustomAttributes)

        // *** End programmer edit section *** (Шлагбаум.Адрес CustomAttributes)
        [StrLen(255)]
        public virtual string Адрес
        {
            get
            {
                // *** Start programmer edit section *** (Шлагбаум.Адрес Get start)

                // *** End programmer edit section *** (Шлагбаум.Адрес Get start)
                string result = this.fАдрес;
                // *** Start programmer edit section *** (Шлагбаум.Адрес Get end)

                // *** End programmer edit section *** (Шлагбаум.Адрес Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Шлагбаум.Адрес Set start)

                // *** End programmer edit section *** (Шлагбаум.Адрес Set start)
                this.fАдрес = value;
                // *** Start programmer edit section *** (Шлагбаум.Адрес Set end)

                // *** End programmer edit section *** (Шлагбаум.Адрес Set end)
            }
        }
        
        /// <summary>
        /// Положение.
        /// </summary>
        // *** Start programmer edit section *** (Шлагбаум.Положение CustomAttributes)

        // *** End programmer edit section *** (Шлагбаум.Положение CustomAttributes)
        public virtual IIS.Prilozhenie.Положения Положение
        {
            get
            {
                // *** Start programmer edit section *** (Шлагбаум.Положение Get start)

                // *** End programmer edit section *** (Шлагбаум.Положение Get start)
                IIS.Prilozhenie.Положения result = this.fПоложение;
                // *** Start programmer edit section *** (Шлагбаум.Положение Get end)

                // *** End programmer edit section *** (Шлагбаум.Положение Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Шлагбаум.Положение Set start)

                // *** End programmer edit section *** (Шлагбаум.Положение Set start)
                this.fПоложение = value;
                // *** Start programmer edit section *** (Шлагбаум.Положение Set end)

                // *** End programmer edit section *** (Шлагбаум.Положение Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Prilozhenie.Паркомат.
        /// </summary>
        // *** Start programmer edit section *** (Шлагбаум.Паркомат CustomAttributes)

        // *** End programmer edit section *** (Шлагбаум.Паркомат CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Паркомат"})]
        public virtual IIS.Prilozhenie.Паркомат Паркомат
        {
            get
            {
                // *** Start programmer edit section *** (Шлагбаум.Паркомат Get start)

                // *** End programmer edit section *** (Шлагбаум.Паркомат Get start)
                IIS.Prilozhenie.Паркомат result = this.fПаркомат;
                // *** Start programmer edit section *** (Шлагбаум.Паркомат Get end)

                // *** End programmer edit section *** (Шлагбаум.Паркомат Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Шлагбаум.Паркомат Set start)

                // *** End programmer edit section *** (Шлагбаум.Паркомат Set start)
                this.fПаркомат = value;
                // *** Start programmer edit section *** (Шлагбаум.Паркомат Set end)

                // *** End programmer edit section *** (Шлагбаум.Паркомат Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ШлагбаумE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ШлагбаумE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ШлагбаумE", typeof(IIS.Prilozhenie.Шлагбаум));
                }
            }
            
            /// <summary>
            /// "ШлагбаумL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ШлагбаумL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ШлагбаумL", typeof(IIS.Prilozhenie.Шлагбаум));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Шлагбаум.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfШлагбаум CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfШлагбаум CustomAttributes)
    public class DetailArrayOfШлагбаум : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Prilozhenie.DetailArrayOfШлагбаум members)

        // *** End programmer edit section *** (IIS.Prilozhenie.DetailArrayOfШлагбаум members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Шлагбаум by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Шлагбаум.
        /// </summary>
        public DetailArrayOfШлагбаум(IIS.Prilozhenie.Паркомат fПаркомат) : 
                base(typeof(Шлагбаум), ((ICSSoft.STORMNET.DataObject)(fПаркомат)))
        {
        }
        
        public IIS.Prilozhenie.Шлагбаум this[int index]
        {
            get
            {
                return ((IIS.Prilozhenie.Шлагбаум)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Prilozhenie.Шлагбаум dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
