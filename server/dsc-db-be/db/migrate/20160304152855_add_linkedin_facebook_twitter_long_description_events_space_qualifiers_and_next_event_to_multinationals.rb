class AddLinkedinFacebookTwitterLongDescriptionEventsSpaceQualifiersAndNextEventToMultinationals < ActiveRecord::Migration
  def change
    add_column :multinationals, :linkedin, :string
    add_column :multinationals, :facebook, :string
    add_column :multinationals, :twitter, :string
    add_column :multinationals, :long_description, :text
    add_column :multinationals, :events_space_qualifiers, :text
    add_column :multinationals, :next_event, :string
  end
end
