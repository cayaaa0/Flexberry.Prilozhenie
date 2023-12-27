package Prilozhenie.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Prilozhenie.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Автомобиль
 */
@Entity(name = "IISPrilozhenieАвтомобиль")
@Table(schema = "public", name = "Автомобиль")
public class Avtomobil {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ГосНомер")
    private String госномер;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Voditel")
    @Convert("Voditel")
    @Column(name = "Водитель", length = 16, unique = true, nullable = false)
    private UUID _voditelid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Voditel", insertable = false, updatable = false)
    private Voditel voditel;


    public Avtomobil() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getГосНомер() {
      return госномер;
    }

    public void setГосНомер(String госномер) {
      this.госномер = госномер;
    }


}